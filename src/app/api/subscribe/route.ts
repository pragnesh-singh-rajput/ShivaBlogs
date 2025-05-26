
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resendApiKey = process.env.RESEND_API_KEY;
const resendAudienceId = process.env.RESEND_AUDIENCE_ID;

if (!resendApiKey) {
  console.error("RESEND_API_KEY environment variable is not set.");
}
if (!resendAudienceId) {
  console.error("RESEND_AUDIENCE_ID environment variable is not set.");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

const subscribeSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export async function POST(request: NextRequest) {
  if (!resend) {
    return NextResponse.json({ error: "Resend service is not configured." }, { status: 500 });
  }
  if (!resendAudienceId) {
    return NextResponse.json({ error: "Resend Audience ID is not configured." }, { status: 500 });
  }

  try {
    const body = await request.json();
    const validation = subscribeSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format().email?._errors.join(', ') || "Invalid input." }, { status: 400 });
    }

    const { email } = validation.data;

    try {
      const { data, error } = await resend.contacts.create({
        email: email,
        audienceId: resendAudienceId,
        unsubscribed: false, // Optional: set to true if you want to add them as unsubscribed
      });

      if (error) {
        console.error('Resend API Error:', error);
        // Check for common errors, like already subscribed
        if (error.name === 'validation_error' && error.message.toLowerCase().includes('already subscribed')) {
             return NextResponse.json({ message: "You are already subscribed!" }, { status: 200 });
        }
        return NextResponse.json({ error: error.message || 'Failed to subscribe.' }, { status: 400 });
      }

      return NextResponse.json({ message: 'Successfully subscribed!', contactId: data?.id }, { status: 200 });
    } catch (apiError: any) {
      console.error('Error calling Resend API:', apiError);
      return NextResponse.json({ error: 'An unexpected error occurred with the subscription service.' }, { status: 500 });
    }

  } catch (error) {
    console.error('Request processing error:', error);
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }
}
