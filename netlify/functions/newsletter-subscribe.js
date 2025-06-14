
const { Resend } = require('resend');

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const { email, firstName } = JSON.parse(event.body);

    if (!email || !firstName) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Email and firstName are required' }),
      };
    }

    // Initialize Resend with your API key
    const resend = new Resend('re_J6hBYr31_8ZqPhyPugoQxLmRHMwhXUcPr');

    // Add contact to your audience
    const result = await resend.contacts.create({
      email: email,
      firstName: firstName,
      unsubscribed: false,
      audienceId: '0b16dbe7-4b46-4727-95d4-867445b91406',
    });

    console.log('Resend response:', result);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Successfully subscribed to newsletter!',
        data: result,
      }),
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: error.message || 'Failed to subscribe to newsletter',
      }),
    };
  }
};
