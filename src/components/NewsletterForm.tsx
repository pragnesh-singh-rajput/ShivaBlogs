
import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '../api/subscribe';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !firstName) {
      toast({
        title: "Missing Information",
        description: "Please fill in both your name and email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log('Attempting newsletter subscription...');
      const result = await subscribeToNewsletter({
        email: email.trim(),
        firstName: firstName.trim(),
      });

      if (result.success) {
        setIsSubscribed(true);
        setEmail('');
        setFirstName('');
        toast({
          title: "Successfully Subscribed!",
          description: "Welcome to ShivaBlogs! You'll receive the latest cybersecurity insights.",
        });
        console.log('Newsletter subscription successful');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="cyber-card p-8 text-center animate-fade-in-up">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-green-500">You're All Set!</h3>
        <p className="text-muted-foreground">
          Thank you for subscribing! You'll receive updates about our latest cybersecurity content.
        </p>
      </div>
    );
  }

  return (
    <div className="cyber-card p-8 animate-fade-in-up">
      <div className="text-center mb-6">
        <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 glow-text">Stay Secure, Stay Informed</h3>
        <p className="text-muted-foreground">
          Get the latest cybersecurity insights, vulnerability reports, and security best practices 
          delivered directly to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-background border-primary/30 focus:border-primary"
            required
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background border-primary/30 focus:border-primary"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full cyber-button"
          disabled={isLoading}
        >
          {isLoading ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </Button>
      </form>

      <div className="flex items-center justify-center mt-4 text-xs text-muted-foreground">
        <AlertCircle className="h-3 w-3 mr-1" />
        No spam, only quality security content. Unsubscribe anytime.
      </div>
    </div>
  );
};

export default NewsletterForm;
