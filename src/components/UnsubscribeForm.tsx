import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';

interface UnsubscribeFormProps {
  className?: string;
}

const UnsubscribeForm: React.FC<UnsubscribeFormProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUnsubscribe = async (e: React.FormEvent) => {
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
      const response = await fetch('/api/newsletter/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsUnsubscribed(true);
        setEmail('');
        toast.success('Successfully unsubscribed from our newsletter');
      } else {
        toast.error(data.error || 'Failed to unsubscribe. Please try again.');
      }
    } catch (error) {
      console.error('Unsubscribe error:', error);
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isUnsubscribed) {
    return (
      <div className={`cyber-card p-8 text-center ${className}`}>
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Successfully Unsubscribed</h3>
        <p className="text-muted-foreground mb-6">
          You've been removed from our newsletter. We're sorry to see you go, but you can 
          always resubscribe if you change your mind.
        </p>
        <p className="text-sm text-muted-foreground">
          Thank you for being part of our cybersecurity community.
        </p>
      </div>
    );
  }

  return (
    <div className={`cyber-card p-8 ${className}`}>
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/30">
            <Mail className="h-6 w-6 text-destructive" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4">Unsubscribe from Newsletter</h3>
        <p className="text-muted-foreground">
          We're sorry to see you go. Enter your email address below to unsubscribe 
          from our cybersecurity newsletter.
        </p>
      </div>

      <form onSubmit={handleUnsubscribe} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background border-destructive/30 focus:border-destructive focus:ring-destructive/50"
            disabled={isLoading}
            required
          />
          <Button 
            type="submit" 
            variant="destructive"
            className="whitespace-nowrap min-w-[120px]"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              'Unsubscribe'
            )}
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            This action will remove you from all future newsletter communications.
          </p>
        </div>
      </form>
    </div>
  );
};

export default UnsubscribeForm;