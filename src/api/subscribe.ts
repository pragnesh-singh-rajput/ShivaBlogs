
import { supabase } from '@/integrations/supabase/client';

export interface SubscribeRequest {
  email: string;
  firstName: string;
}

export const subscribeToNewsletter = async (data: SubscribeRequest) => {
  try {
    console.log('Subscribing to newsletter with Supabase Edge Function...');
    
    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Please enter a valid email address');
    }
    
    if (!data.firstName.trim()) {
      throw new Error('First name is required');
    }

    // Call our Supabase Edge Function
    const { data: result, error } = await supabase.functions.invoke('newsletter-subscribe', {
      body: {
        email: data.email.trim(),
        firstName: data.firstName.trim(),
      },
    });

    if (error) {
      console.error('Supabase function error:', error);
      throw new Error(error.message || 'Subscription failed');
    }

    console.log('Successfully subscribed:', result);
    
    return {
      success: true,
      message: 'Successfully subscribed to newsletter!'
    };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};
