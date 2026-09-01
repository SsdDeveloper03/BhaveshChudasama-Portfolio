/**
 * Getgabs WhatsApp Notification Helper Module
 * Provides server-side helper functions for sending WhatsApp messages via Getgabs API.
 */

/**
 * Normalizes phone numbers to standard format for WhatsApp API (e.g. 91XXXXXXXXXX).
 * Handles Indian numbers with formats: 9876543210, +919876543210, 919876543210, 09876543210.
 *
 * @param {string} phone - Input phone number string
 * @param {string} defaultCountryCode - Country code to prepend if 10 digits (default '91')
 * @returns {string} Normalized numeric phone string
 */
export function normalizeWhatsAppNumber(phone, defaultCountryCode = '91') {
  if (!phone) return '';

  // Remove all non-digit characters
  let cleaned = String(phone).replace(/\D/g, '');

  // If starting with leading 0 (e.g., 09876543210), strip the leading 0
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    cleaned = cleaned.substring(1);
  }

  // If 10 digits (standard Indian mobile number without country code)
  if (cleaned.length === 10) {
    return `${defaultCountryCode}${cleaned}`;
  }

  // If 12 digits and starts with 91 (standard Indian mobile with country code)
  if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return cleaned;
  }

  // If 10 to 15 digits (international standard length without +)
  if (cleaned.length >= 10 && cleaned.length <= 15) {
    return cleaned;
  }

  return cleaned;
}

/**
 * Converts technical form source names into human-friendly enquiry titles.
 *
 * @param {string} source - Source string from the enquiry form
 * @returns {string} Human-readable enquiry title
 */
export function getEnquiryType(source) {
  if (!source || typeof source !== 'string') return 'General Enquiry';

  const sourceMap = {
    SoftwareExpert: 'Software Expert',
    Podcaster: 'Podcast Guest',
    Podcast: 'Podcast Guest',
    GrowthCoach: 'Growth Coaching',
    LifeMentor: 'Life Mentoring',
    PublicSpeaker: 'Public Speaking',
    Tailoring: 'Tailoring Software',
    Transport: 'Transport & Logistics',
    Payroll: 'Payroll Management',
    Billing: 'Billing & ERP',
    BusinessManagement: 'Business Management',
  };

  if (sourceMap[source]) {
    return sourceMap[source];
  }

  // Fallback: convert PascalCase/camelCase to space separated title
  const formatted = source
    .replace(/([A-Z])/g, ' $1')
    .trim();

  return formatted || 'General Enquiry';
}

/**
 * Formats city, state, and country into a clean location string.
 * Prevents output like "null, null, India" or "undefined, undefined, India".
 *
 * @param {Object} enquiry - Enquiry data object containing city, state, country
 * @returns {string} Formatted location string (e.g. "Surat, Gujarat, India")
 */
export function formatLocation(enquiry) {
  if (!enquiry) return 'India';
  const { city, state, country } = enquiry;

  const parts = [city, state, country]
    .map((val) => (val ? String(val).trim() : ''))
    .filter(
      (val) => val && val.toLowerCase() !== 'null' && val.toLowerCase() !== 'undefined'
    );

  if (parts.length === 0) {
    return 'India';
  }

  return parts.join(', ');
}

/**
 * Common low-level helper to send a Getgabs WhatsApp template message.
 *
 * @param {Object} options
 * @param {string} options.to - Recipient phone number
 * @param {string} options.receiverName - Recipient display name
 * @param {string} options.templateName - Getgabs template identifier
 * @param {Array<{type: string, text: string}>} options.parameters - Array of body parameter objects
 * @returns {Promise<{success: boolean, data?: any, error?: string}>}
 */
export async function sendWhatsAppTemplate({ to, receiverName, templateName, parameters }) {
  const apiUrl = process.env.GETGABS_API_URL || 'https://app.getgabs.com/whatsappbusiness/send-templated-message';
  const apiKey = process.env.GETGABS_API_KEY;
  const sender = process.env.GETGABS_SENDER || '918799441838';
  const campaignId = process.env.GETGABS_CAMPAIGN_ID || 'put_campaign_id';

  if (!apiKey) {
    console.error('[WhatsApp Error] GETGABS_API_KEY is not configured in environment variables.');
    return { success: false, error: 'Getgabs API key missing' };
  }

  const normalizedTo = normalizeWhatsAppNumber(to);
  if (!normalizedTo) {
    console.error('[WhatsApp Error] Invalid or missing recipient phone number:', to);
    return { success: false, error: 'Invalid recipient phone number' };
  }

  // Ensure parameter text values are non-empty strings (WhatsApp API requirement)
  const sanitizedParams = (parameters || []).map((param) => {
    const textVal = param && param.text !== undefined && param.text !== null ? String(param.text).trim() : '';
    return {
      type: 'text',
      text: textVal || 'N/A',
    };
  });

  const payload = {
    api_key: apiKey,
    sender: sender,
    campaign_id: campaignId,
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: normalizedTo,
    receiver_name: receiverName || 'Customer',
    type: 'template',
    template: {
      name: templateName,
      language: {
        code: 'en_US',
      },
      components: [
        {
          type: 'body',
          parameters: sanitizedParams,
        },
      ],
    },
  };

  try {
    console.log(`[WhatsApp] Sending template '${templateName}' to recipient: ${normalizedTo} (Endpoint: ${apiUrl})`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await response.json().catch(() => ({}));

    if (response.ok && (data.status === true || data.status === 'success' || data.messages || response.status === 200) && data.status !== false) {
      console.log(`[WhatsApp] Template '${templateName}' sent successfully to ${normalizedTo}`);
      return { success: true, data };
    } else {
      console.error(`[WhatsApp Error] Failed to send template '${templateName}' to ${normalizedTo}:`, JSON.stringify(data));
      if (data.message === 'Wrong Campaign ID!') {
        console.warn('[WhatsApp Notice] Getgabs requires a valid GETGABS_CAMPAIGN_ID from your Getgabs panel (WhatsApp Book -> Campaign Lists).');
      }
      return { success: false, error: data.message || data.msg || 'API request failed', details: data };
    }
  } catch (err) {
    if (err.name === 'AbortError') {
      console.error(`[WhatsApp Error] Timeout requesting Getgabs API for template '${templateName}' to ${normalizedTo}`);
      return { success: false, error: 'Getgabs API timeout' };
    }
    console.error(`[WhatsApp Error] Exception sending template '${templateName}' to ${normalizedTo}:`, err.message || err);
    return { success: false, error: err.message || 'Network error' };
  }
}

/**
 * Sends a WhatsApp notification to the internal team regarding a new enquiry.
 * Template: portfolio_new_lead (6 variables)
 * {{1}} = Client name
 * {{2}} = Client phone
 * {{3}} = Business/Organization
 * {{4}} = Form type
 * {{5}} = Requirement
 * {{6}} = Message/Comments
 *
 * @param {Object} enquiry - Saved enquiry details
 * @returns {Promise<{success: boolean, data?: any, error?: string}>}
 */
export async function sendTeamEnquiryNotification(enquiry) {
  const teamPhone = process.env.GETGABS_TEAM_PHONE || '918200414301';
  const reference = enquiry.enquiryReference || enquiry.reference || 'N/A';

  console.log(`[WhatsApp] Sending team notification for enquiry ${reference}...`);

  const customerName = enquiry.customerName || 'N/A';
  const mobileNumber = enquiry.mobileNumber || 'N/A';
  const companyName = enquiry.companyName || 'Individual';
  const enquiryType = getEnquiryType(enquiry.source);

  // Extract user-entered message or requirement text
  let userSubmittedMessage = enquiry.message || enquiry.requirement;

  if (!userSubmittedMessage && enquiry.roleSpecificData) {
    if (typeof enquiry.roleSpecificData === 'string') {
      try {
        const parsed = JSON.parse(enquiry.roleSpecificData);
        userSubmittedMessage = parsed.message || parsed.requirement || parsed.notes || parsed.businessType;
      } catch (e) {}
    } else if (typeof enquiry.roleSpecificData === 'object') {
      const data = enquiry.roleSpecificData;
      userSubmittedMessage = data.message || data.requirement || data.notes || data.businessType;
    }
  }

  // Parameter 5: Requirement
  const requirement = userSubmittedMessage && String(userSubmittedMessage).trim() 
    ? String(userSubmittedMessage).trim() 
    : (formatLocation(enquiry) !== 'India' ? formatLocation(enquiry) : `${enquiryType} Consultation`);

  // Parameter 6: Message/Comments
  const comments = userSubmittedMessage && String(userSubmittedMessage).trim()
    ? `${String(userSubmittedMessage).trim()} (Ref: ${reference})`
    : `Ref: ${reference}`;

  const result = await sendWhatsAppTemplate({
    to: teamPhone,
    receiverName: 'Bhavesh Portfolio Team',
    templateName: 'portfolio_new_lead',
    parameters: [
      { type: 'text', text: customerName },
      { type: 'text', text: mobileNumber },
      { type: 'text', text: companyName },
      { type: 'text', text: enquiryType },
      { type: 'text', text: requirement },
      { type: 'text', text: comments },
    ],
  });

  if (result.success) {
    console.log(`[WhatsApp] Team notification sent successfully for enquiry ${reference}`);
  } else {
    console.error(`[WhatsApp] Team notification failed for enquiry ${reference}:`, result.error);
  }

  return result;
}

/**
 * Sends a WhatsApp confirmation message to the client after enquiry submission.
 * Template: portfolio_enquiry_receive (2 variables)
 * {{1}} = CustomerName
 * {{2}} = Friendly Enquiry Type
 *
 * @param {Object} enquiry - Saved enquiry details
 * @returns {Promise<{success: boolean, data?: any, error?: string}>}
 */
export async function sendClientEnquiryConfirmation(enquiry) {
  const clientPhone = enquiry.mobileNumber;
  const reference = enquiry.enquiryReference || enquiry.reference || 'N/A';
  const customerName = enquiry.customerName || 'Valued Client';
  const enquiryType = getEnquiryType(enquiry.source);

  console.log(`[WhatsApp] Sending client confirmation for enquiry ${reference}...`);

  if (!clientPhone) {
    console.error(`[WhatsApp] Client confirmation skipped for enquiry ${reference}: No mobile number provided`);
    return { success: false, error: 'No mobile number' };
  }

  const result = await sendWhatsAppTemplate({
    to: clientPhone,
    receiverName: customerName,
    templateName: 'portfolio_enquiry_receive',
    parameters: [
      { type: 'text', text: customerName },
      { type: 'text', text: enquiryType },
    ],
  });

  if (result.success) {
    console.log(`[WhatsApp] Client confirmation sent successfully for enquiry ${reference}`);
  } else {
    console.error(`[WhatsApp] Client confirmation failed for enquiry ${reference}`);
  }

  return result;
}
