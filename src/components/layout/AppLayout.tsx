import type { ReactNode } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteSidebar from '@/components/layout/SiteSidebar';
import { getAllPosts } from '@/lib/blog-data';
import { Toaster } from "@/components/ui/toaster";

export default function AppLayout({ children }: { children: ReactNode }) {
  const posts = getAllPosts(); // Fetch all posts to extract tags for sidebar

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <div className="container mx-auto flex-grow w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          <main className="w-full lg:w-3/4 animate-fadeIn">
            {children}
          </main>
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit"> {/* Adjusted lg:top-24 for header height + padding */}
            <div className="p-6 rounded-xl shadow-xl bg-card border border-border">
              <SiteSidebar posts={posts} />
            </div>
          </aside>
        </div>
      </div>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/40 mt-auto">
        © {new Date().getFullYear()} ShivaBlogs. All rights reserved.
      </footer>
      <Toaster />
    </div>
  );
}
