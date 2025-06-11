
import React from 'react';
import { Share2, Twitter, Facebook, Linkedin, Copy } from 'lucide-react';
import { toast } from 'sonner';

export interface SocialShareProps {
  title: string;
  url: string;
  excerpt: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ title, url, excerpt }) => {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Link copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center text-muted-foreground">
        <Share2 className="h-4 w-4 mr-2" />
        <span className="text-sm">Share this article:</span>
      </div>
      
      <div className="flex items-center gap-2">
        <a
          href={shareUrls.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4 group-hover:text-primary transition-colors" />
        </a>
        
        <a
          href={shareUrls.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4 group-hover:text-primary transition-colors" />
        </a>
        
        <a
          href={shareUrls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4 group-hover:text-primary transition-colors" />
        </a>
        
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
          aria-label="Copy link"
        >
          <Copy className="h-4 w-4 group-hover:text-primary transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
