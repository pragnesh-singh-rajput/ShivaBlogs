// Serverless function for newsletter subscription
// This would typically be deployed to Vercel, Netlify, or similar platform

import { ResendClient, extractNameFromEmail } from '../../src/api/newsletter.ts';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Get API key from environment variables
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY environment variable is not set');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const resendClient = new ResendClient(apiKey);
    
    // Extract name from email
    const { firstName, lastName } = extractNameFromEmail(email);

    try {
      // Try to add the contact
      const contact = await resendClient.addContact(email, firstName, lastName);
      
      return res.status(200).json({
        success: true,
        message: 'Successfully subscribed to newsletter',
        contact: {
          email: contact.email,
          firstName: contact.first_name,
          lastName: contact.last_name,
        }
      });
    } catch (error) {
      // If contact already exists, check if they're unsubscribed
      if (error.message.includes('already exists')) {
        try {
          const existingContact = await resendClient.getContact(email);
          
          if (existingContact.unsubscribed) {
            // Resubscribe the contact
            const updatedContact = await resendClient.updateContact(email, { 
              unsubscribed: false 
            });
            
            return res.status(200).json({
              success: true,
              message: 'Successfully resubscribed to newsletter',
              contact: {
                email: updatedContact.email,
                firstName: updatedContact.first_name,
                lastName: updatedContact.last_name,
              }
            });
          } else {
            return res.status(400).json({ 
              error: 'This email is already subscribed to our newsletter' 
            });
          }
        } catch (getError) {
          console.error('Error checking existing contact:', getError);
          return res.status(400).json({ 
            error: 'This email is already subscribed to our newsletter' 
          });
        }
      } else {
        throw error;
      }
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return res.status(500).json({
      error: 'Failed to subscribe to newsletter. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}