
export interface SubscribeRequest {
  email: string;
  firstName: string;
}

export const subscribeToNewsletter = async (data: SubscribeRequest) => {
  try {
    console.log('Subscribing to newsletter...');
    
    // Simulate API delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Please enter a valid email address');
    }
    
    if (!data.firstName.trim()) {
      throw new Error('First name is required');
    }
    
    // Simulate successful subscription
    console.log('Successfully subscribed:', data);
    
    return {
      success: true,
      message: 'Successfully subscribed to newsletter!'
    };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};
