const sql = require('mssql');
require('dotenv').config({ path: '.env.local' });

const config = {
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || 'SunriseDb@2025',
  server: process.env.DB_SERVER || '160.187.80.212',
  port: parseInt(process.env.DB_PORT || '15379', 10),
  database: process.env.DB_DATABASE || 'dbSCRM_EmpSunrise',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

async function updateTable() {
  try {
    console.log(`Connecting to SQL Server (${config.server}:${config.port})...`);
    const pool = await sql.connect(config);
    console.log('Successfully connected to database:', config.database);

    const updateQuery = `
      -- 1. Create table tbl_SoftwareDiscovery_Enquiries if not exists
      IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'tbl_SoftwareDiscovery_Enquiries')
      BEGIN
        CREATE TABLE tbl_SoftwareDiscovery_Enquiries (
            EnquiryId BIGINT IDENTITY(1,1) PRIMARY KEY,
            EnquiryReference NVARCHAR(50) UNIQUE,
            CustomerName NVARCHAR(200) NOT NULL,
            CompanyName NVARCHAR(200),
            MobileNumber NVARCHAR(30) NOT NULL,
            Email NVARCHAR(200),
            Address NVARCHAR(500),
            City NVARCHAR(100),
            State NVARCHAR(100),
            Country NVARCHAR(100) DEFAULT 'India',
            PreferredLanguage NVARCHAR(50) DEFAULT 'English',
            Status NVARCHAR(30) DEFAULT 'New',
            Source NVARCHAR(50) NOT NULL,
            CurrentStep INT DEFAULT 0,
            CompletionPercentage DECIMAL(5,2) DEFAULT 0,
            IsSubmitted BIT DEFAULT 0,
            SubmittedAt DATETIME2(3),
            CreatedAt DATETIME2(3) DEFAULT GETDATE(),
            ModifiedAt DATETIME2(3) DEFAULT GETDATE(),
            IPAddress NVARCHAR(50),
            IsActive BIT DEFAULT 1,
            IsDeleted BIT DEFAULT 0,
            ClientSessionId NVARCHAR(100),
            RoleSpecificData NVARCHAR(MAX),
            RecommendationJson NVARCHAR(MAX),
            ProposalJson NVARCHAR(MAX)
        );
        SELECT 'Table tbl_SoftwareDiscovery_Enquiries created' AS Result;
      END
      ELSE
      BEGIN
        -- 2. Add RoleSpecificData column if missing in existing tbl_SoftwareDiscovery_Enquiries
        IF NOT EXISTS (
          SELECT * FROM INFORMATION_SCHEMA.COLUMNS 
          WHERE TABLE_NAME = 'tbl_SoftwareDiscovery_Enquiries' AND COLUMN_NAME = 'RoleSpecificData'
        )
        BEGIN
          ALTER TABLE tbl_SoftwareDiscovery_Enquiries ADD RoleSpecificData NVARCHAR(MAX);
          SELECT 'Column RoleSpecificData added to tbl_SoftwareDiscovery_Enquiries' AS Result;
        END
        ELSE
        BEGIN
          SELECT 'tbl_SoftwareDiscovery_Enquiries is up to date' AS Result;
        END
      END
    `;

    const result = await pool.request().query(updateQuery);
    console.log('Result:', result.recordset ? result.recordset[0] : 'Done');
    await pool.close();
    process.exit(0);
  } catch (err) {
    console.error('Database connection / table update error:', err);
    process.exit(1);
  }
}

updateTable();
