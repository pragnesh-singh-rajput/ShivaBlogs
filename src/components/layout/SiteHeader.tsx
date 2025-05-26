import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function SiteHeader() {
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
          <span>ShivaBlogs</span>
        </Link>
        <nav className="flex items-center space-x-4 md:space-x-6">
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="https://pragneshsingh.works/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Mail className="mr-2 h-4 w-4" />
            Newsletter
          </Button>
        </nav>
      </div>
    </header>
  );
}
