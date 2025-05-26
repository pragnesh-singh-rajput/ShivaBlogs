
'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function NewsletterSubscribeForm() {
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const socialLinks = [
    {
      href: 'https://linkedin.com/in/pragnesh-singh-rajput',
      icon: Linkedin,
      label: 'LinkedIn',
      ariaLabel: 'Connect on LinkedIn',
    },
    {
      href: 'https://github.com/pragnesh-singh-rajput',
      icon: Github,
      label: 'GitHub',
      ariaLabel: 'View GitHub profile',
    },
    {
      href: 'mailto:singhpragnesh89@gmail.com',
      icon: Mail,
      label: 'Email',
      ariaLabel: 'Send an Email',
    },
  ];

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    if (!agreedToTerms) {
      toast({
        title: "Validation Error",
        description: "You must agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Subscribed!",
          description: result.message || `Thank you for subscribing with ${email}.`,
        });
        setEmail('');
        setAgreedToTerms(false);
      } else {
        toast({
          title: "Subscription Failed",
          description: result.error || "Could not subscribe. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="mt-12 border-border/70 bg-card shadow-xl">
      <div className="md:grid md:grid-cols-2 md:gap-x-8">
        <div className="p-6 md:border-r md:border-border/50">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="font-mono flex items-center text-2xl text-primary">
              Connect with Me
            </CardTitle>
            <CardDescription className="text-muted-foreground pt-1">
              Follow my work or get in touch through these platforms.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 space-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="flex items-center p-2 rounded-md text-sm text-foreground/90 hover:bg-muted/70 hover:text-primary transition-colors group"
              >
                <link.icon className="mr-3 h-5 w-5 text-accent group-hover:text-primary transition-colors" />
                {link.label}
              </a>
            ))}
          </CardContent>
        </div>

        <div className="p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="font-mono flex items-center text-2xl text-primary">
              <Mail className="mr-3 h-7 w-7" />
              Stay Updated
            </CardTitle>
            <CardDescription className="text-muted-foreground pt-1">
              Subscribe for the latest articles and insights.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <Label htmlFor="newsletter-email-blog" className="sr-only">Email address</Label>
                <Input
                  id="newsletter-email-blog"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="bg-input border-input text-foreground placeholder:text-muted-foreground"
                  required
                  disabled={isSubmitting}
                  aria-label="Email address for newsletter"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter-terms-blog"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  className="data-[state=checked]:bg-primary data-[state=checked]:border-primary border-input"
                  disabled={isSubmitting}
                  aria-labelledby="newsletter-terms-label-blog"
                />
                <Label
                  id="newsletter-terms-label-blog"
                  htmlFor="newsletter-terms-blog"
                  className="text-xs font-normal text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the <Link href="/terms" className="underline text-accent hover:text-accent/80">terms and conditions</Link>.
                </Label>
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
