import type { ReactNode } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
// SiteSidebar and getAllPosts are no longer needed here
import { Toaster } from "@/components/ui/toaster";
import Link from 'next/link';

export default function AppLayout({ children }: { children: ReactNode }) {
  // const posts = getAllPosts(); // No longer needed as SiteSidebar is removed

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <div className="container mx-auto flex-grow w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* Adjusted main content width to full as sidebar is removed */}
          <main className="w-full animate-fadeIn">
            {children}
          </main>
          {/* 
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit">
            <div className="p-6 rounded-xl shadow-xl bg-card border border-border">
              <SiteSidebar posts={posts} />
            </div>
          </aside> 
          */}
        </div>
      </div>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/40 mt-auto">
        <p>© {new Date().getFullYear()} Tech Prastish. All rights reserved.</p>
        <p className="mt-2">
          <Link href="https://pragneshsingh.works" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Visit Pragnesh Singh's Portfolio
          </Link>
        </p>
      </footer>
      <Toaster />
    </div>
  );
}
