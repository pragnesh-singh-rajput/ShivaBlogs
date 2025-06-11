
export interface SubscribeRequest {
  email: string;
  firstName: string;
}

export const mockSubscribeToNewsletter = async (data: SubscribeRequest): Promise<{ success: boolean; message: string }> => {
  console.log('Mock newsletter subscription for:', data);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error('Invalid email address');
  }
  
  if (!data.firstName.trim()) {
    throw new Error('First name is required');
  }
  
  // Mock successful subscription
  return {
    success: true,
    message: 'Successfully subscribed to newsletter!'
  };
};
