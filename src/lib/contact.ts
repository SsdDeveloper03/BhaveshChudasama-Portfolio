export interface ContactFormPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export async function submitContactForm(payload: ContactFormPayload) {
  try {
    await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'SoftwareExpert',
        customerName: payload.name,
        companyName: payload.company || '',
        mobileNumber: payload.phone || 'N/A',
        email: payload.email || '',
        roleSpecificData: {
          needs: payload.message || '',
          enquiryType: 'General IT Inquiry',
        },
        proposalJson: JSON.stringify({ source: 'Contact Section', timestamp: new Date().toISOString() })
      }),
    });
  } catch (e) {
    console.error('Failed to post contact form to /api/enquiry:', e);
  }

  return {
    success: true,
    payload,
  };
}
