import { NextResponse } from 'next/server';
import sql from 'mssql';
import { sendTeamEnquiryNotification, sendClientEnquiryConfirmation } from '@/lib/getgabs/whatsapp';

let serverHost = process.env.DB_SERVER || '160.187.80.212';
let serverPort = parseInt(process.env.DB_PORT || '15379', 10);

if (serverHost.includes(',')) {
  const parts = serverHost.split(',');
  serverHost = parts[0].trim();
  if (parts[1]) serverPort = parseInt(parts[1].trim(), 10);
}

const config = {
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || 'SunriseDb@2025',
  server: serverHost,
  port: serverPort,
  database: process.env.DB_DATABASE || 'dbSCRM_EmpSunrise',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export async function POST(request) {
  let enquiryId = null;
  let dbSaved = false;

  try {
    const body = await request.json();
    
    // Generate Reference Number
    const reference = `ENQ-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    
    // Get IP Address
    const ipAddress = request.headers.get('x-forwarded-for') || 
                      request.headers.get('x-real-ip') || 
                      '0.0.0.0';

    // Attempt DB Insertion
    try {
      const pool = await sql.connect(config);

      // Auto-migration check: ensure RoleSpecificData column exists in tbl_SoftwareDiscovery_Enquiries
      await pool.request().query(`
        IF NOT EXISTS (
          SELECT * FROM INFORMATION_SCHEMA.COLUMNS 
          WHERE TABLE_NAME = 'tbl_SoftwareDiscovery_Enquiries' AND COLUMN_NAME = 'RoleSpecificData'
        )
        BEGIN
          ALTER TABLE tbl_SoftwareDiscovery_Enquiries ADD RoleSpecificData NVARCHAR(MAX);
        END
      `);
      
      const result = await pool.request()
        .input('EnquiryReference', sql.NVarChar(50), reference)
        .input('CustomerName', sql.NVarChar(200), body.customerName)
        .input('CompanyName', sql.NVarChar(200), body.companyName || null)
        .input('MobileNumber', sql.NVarChar(30), body.mobileNumber)
        .input('Email', sql.NVarChar(200), body.email || null)
        .input('Address', sql.NVarChar(500), body.address || null)
        .input('City', sql.NVarChar(100), body.city || null)
        .input('State', sql.NVarChar(100), body.state || null)
        .input('Country', sql.NVarChar(100), body.country || 'India')
        .input('PreferredLanguage', sql.NVarChar(50), body.preferredLanguage || 'English')
        .input('Status', sql.NVarChar(30), 'New')
        .input('Source', sql.NVarChar(50), body.source)
        .input('CurrentStep', sql.Int, 1)
        .input('CompletionPercentage', sql.Decimal(5,2), 100)
        .input('IsSubmitted', sql.Bit, 1)
        .input('SubmittedAt', sql.DateTime2, new Date())
        .input('CreatedAt', sql.DateTime2, new Date())
        .input('ModifiedAt', sql.DateTime2, new Date())
        .input('IPAddress', sql.NVarChar(50), ipAddress)
        .input('IsActive', sql.Bit, 1)
        .input('IsDeleted', sql.Bit, 0)
        .input('ClientSessionId', sql.NVarChar(100), body.clientSessionId || null)
        .input('RoleSpecificData', sql.NVarChar(sql.MAX), JSON.stringify(body.roleSpecificData || {}))
        .input('RecommendationJson', sql.NVarChar(sql.MAX), body.recommendationJson || null)
        .input('ProposalJson', sql.NVarChar(sql.MAX), body.proposalJson || null)
        .query(`
          INSERT INTO tbl_SoftwareDiscovery_Enquiries (
              EnquiryReference, CustomerName, CompanyName, MobileNumber, Email,
              Address, City, State, Country, PreferredLanguage,
              Status, Source, CurrentStep, CompletionPercentage,
              IsSubmitted, SubmittedAt, CreatedAt, ModifiedAt,
              IPAddress, IsActive, IsDeleted, ClientSessionId,
              RoleSpecificData, RecommendationJson, ProposalJson
          ) VALUES (
              @EnquiryReference, @CustomerName, @CompanyName, @MobileNumber, @Email,
              @Address, @City, @State, @Country, @PreferredLanguage,
              @Status, @Source, @CurrentStep, @CompletionPercentage,
              @IsSubmitted, @SubmittedAt, @CreatedAt, @ModifiedAt,
              @IPAddress, @IsActive, @IsDeleted, @ClientSessionId,
              @RoleSpecificData, @RecommendationJson, @ProposalJson
          );
          SELECT SCOPE_IDENTITY() AS EnquiryId;
        `);
      
      enquiryId = result.recordset[0]?.EnquiryId;
      dbSaved = true;
      await pool.close();
    } catch (dbErr) {
      console.error('[Database Notice] DB Save skipped/timed out on Vercel serverless environment:', dbErr.message || dbErr);
    }
    
    // Construct enquiry details for WhatsApp notifications
    const enquiryData = {
      enquiryId: enquiryId || 0,
      enquiryReference: reference,
      customerName: body.customerName,
      companyName: body.companyName,
      mobileNumber: body.mobileNumber,
      email: body.email,
      address: body.address,
      city: body.city,
      state: body.state,
      country: body.country || 'India',
      source: body.source,
      message: body.message,
      requirement: body.requirement,
      roleSpecificData: body.roleSpecificData,
    };

    let whatsappStatus = { team: false, client: false };

    // Trigger Getgabs WhatsApp notifications (Team Alert & Client Confirmation)
    try {
      const [teamRes, clientRes] = await Promise.all([
        sendTeamEnquiryNotification(enquiryData),
        sendClientEnquiryConfirmation(enquiryData)
      ]);
      whatsappStatus.team = teamRes.success;
      whatsappStatus.client = clientRes.success;
    } catch (waErr) {
      console.error('[WhatsApp] Error sending notifications:', waErr.message || waErr);
    }

    return NextResponse.json({
      success: true,
      enquiryId: enquiryId,
      enquiryReference: reference,
      dbSaved: dbSaved,
      whatsapp: whatsappStatus
    });
    
  } catch (error) {
    console.error('General error handling enquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process enquiry: ' + (error.message || error) },
      { status: 500 }
    );
  }
}
