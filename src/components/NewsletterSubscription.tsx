import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';

interface NewsletterSubscriptionProps {
  className?: string;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        toast.success('Successfully subscribed! Welcome to our cybersecurity community.');
      } else {
        if (data.error?.includes('already exists')) {
          toast.error('This email is already subscribed to our newsletter');
        } else {
          toast.error(data.error || 'Failed to subscribe. Please try again.');
        }
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className={`cyber-card p-8 text-center ${className}`}>
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-4 glow-text">Welcome Aboard!</h3>
        <p className="text-muted-foreground mb-6">
          You've successfully joined our cybersecurity community. Get ready for cutting-edge insights 
          and security best practices delivered to your inbox.
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>Check your email for a confirmation message</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`cyber-card p-8 ${className}`}>
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
            <Mail className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 glow-text">Stay Secure, Stay Informed</h3>
        <p className="text-muted-foreground">
          Get the latest cybersecurity insights, vulnerability reports, and security best practices 
          delivered directly to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubscribe} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background border-primary/30 focus:border-primary focus:ring-primary/50"
            disabled={isLoading}
            required
          />
          <Button 
            type="submit" 
            className="cyber-button whitespace-nowrap min-w-[120px]"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            No spam, only quality security content. Unsubscribe anytime.
          </p>
        </div>
      </form>

      <div className="mt-6 pt-6 border-t border-primary/20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <span className="text-primary font-bold text-sm">1</span>
            </div>
            <span className="text-xs text-muted-foreground">Weekly Insights</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <span className="text-primary font-bold text-sm">2</span>
            </div>
            <span className="text-xs text-muted-foreground">Threat Alerts</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <span className="text-primary font-bold text-sm">3</span>
            </div>
            <span className="text-xs text-muted-foreground">Best Practices</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;