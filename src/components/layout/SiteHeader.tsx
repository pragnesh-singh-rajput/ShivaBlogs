
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Search as SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";


export default function SiteHeader() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm(''); 
    }
  };

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
        setIsDialogOpen(false);
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-3xl font-bold text-primary hover:text-primary/90 transition-colors">
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
            aria-hidden="true"
          >
            <path
              d="M25 15C25 12.2386 27.2386 10 30 10H70C72.7614 10 75 12.2386 75 15V35H55C52.2386 35 50 37.2386 50 40V60C50 62.7614 47.7614 65 45 65H25V15Z"
              fill="currentColor"
              className="text-primary/70"
            />
            <path
              d="M75 85C75 87.7614 72.7614 90 70 90H30C27.2386 90 25 87.7614 25 85V65H45C47.7614 65 50 62.7614 50 60V40C50 37.2386 52.2386 35 55 35H75V85Z"
              fill="currentColor"
            />
          </svg>
          <span className="font-mono">ShivaBlogs</span>
        </Link>
        <nav className="flex items-center space-x-2 md:space-x-4">
          <form onSubmit={handleSearchSubmit} className="relative hidden md:flex items-center">
            <Input
              type="search"
              placeholder="Search articles..."
              className="h-9 pr-10 sm:w-40 md:w-48 lg:w-56 rounded-md bg-muted/60 border-border/70 focus:border-primary focus:ring-primary text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search articles"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-primary"
              aria-label="Submit search"
            >
              <SearchIcon className="h-4 w-4" />
            </Button>
          </form>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Mail className="mr-2 h-4 w-4" />
                Newsletter
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-card border-border text-foreground">
              <DialogHeader>
                <DialogTitle className="text-primary">Subscribe to Our Newsletter</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Get the latest insights, articles, and updates directly to your inbox. No spam, ever.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleNewsletterSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                    <Label htmlFor="email" className="text-left text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="bg-input border-input text-foreground placeholder:text-muted-foreground"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      className="data-[state=checked]:bg-primary data-[state=checked]:border-primary border-input"
                      disabled={isSubmitting}
                    />
                    <Label
                      htmlFor="terms"
                      className="text-xs font-normal text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the <Link href="/terms" className="underline text-accent hover:text-accent/80">terms and conditions</Link>.
                    </Label>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </nav>
      </div>
       <div className="md:hidden px-4 pb-3 pt-1 border-t border-border/40">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full">
            <Input
              type="search"
              placeholder="Search articles..."
              className="h-9 w-full pr-10 rounded-md bg-muted/60 border-border/70 focus:border-primary focus:ring-primary text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search articles"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-primary"
              aria-label="Submit search"
            >
              <SearchIcon className="h-4 w-4" />
            </Button>
          </form>
        </div>
    </header>
  );
}
