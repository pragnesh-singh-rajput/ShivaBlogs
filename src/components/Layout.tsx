
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Search, X, ExternalLink } from 'lucide-react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

interface LayoutProps {
  children: React.ReactNode;
}

// Sample blog posts for search
const searchablePosts = [
  { id: 'advanced-penetration-testing-techniques', title: 'Advanced Penetration Testing Techniques', category: 'Penetration Testing' },
  { id: 'zero-trust-architecture-implementation', title: 'Zero Trust Architecture Implementation', category: 'Security Architecture' },
  { id: 'ai-powered-threat-detection', title: 'AI-Powered Threat Detection', category: 'Threat Intelligence' },
  { id: 'kubernetes-security-best-practices', title: 'Kubernetes Security Best Practices', category: 'Container Security' },
  { id: 'incident-response-playbook', title: 'Incident Response Playbook', category: 'Incident Response' },
  { id: 'cloud-security-compliance', title: 'Cloud Security Compliance', category: 'Cloud Security' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background matrix-bg">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-primary/10 rounded-lg border border-primary/30 group-hover:bg-primary/20 transition-colors">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold glow-text">ShivaBlogs</h1>
                <p className="text-sm text-muted-foreground">By Pragnesh Singh Rajput</p>
              </div>
            </Link>

            <div className="flex items-center space-x-6">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  location.pathname === '/' 
                    ? 'text-primary bg-primary/10 border border-primary/30' 
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  location.pathname === '/about' 
                    ? 'text-primary bg-primary/10 border border-primary/30' 
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                About
              </Link>
              <a 
                href="https://pragneshsingh.works/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 text-muted-foreground hover:text-primary hover:bg-primary/5 group"
              >
                Portfolio
                <ExternalLink className="h-3 w-3 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
              <button 
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Command Dialog */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search blogs..." />
        <CommandList>
          <CommandEmpty>No blogs found.</CommandEmpty>
          <CommandGroup heading="Blog Posts">
            {searchablePosts.map((post) => (
              <CommandItem
                key={post.id}
                onSelect={() => {
                  setSearchOpen(false);
                  window.location.href = `/blog/${post.id}`;
                }}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{post.title}</span>
                  <span className="text-sm text-muted-foreground">{post.category}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
              © 2025 ShivaBlogs by <a href="https://pragneshsingh.works/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Pragnesh Singh Rajput</a>. Securing the digital world, one blog at a time.
            </p>
            <p className="text-sm text-muted-foreground">
              Cybersecurity • Technology • Linux • Penetration Testing
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
