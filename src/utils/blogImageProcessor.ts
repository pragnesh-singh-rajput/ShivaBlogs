
export interface BlogImageData {
  src: string;
  alt: string;
  caption?: string;
}

// Helper function to process image markdown syntax
export const processBlogImages = (content: string): { content: string; images: BlogImageData[] } => {
  const images: BlogImageData[] = [];
  
  // Enhanced regex to capture images with optional captions
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)(?:\s*"([^"]*)")?/g;
  
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const [fullMatch, alt, src, caption] = match;
    images.push({
      src,
      alt: alt || 'Blog image',
      caption
    });
  }
  
  return { content, images };
};

// Helper to get placeholder images for blog posts
export const getPlaceholderImages = (): BlogImageData[] => [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Cybersecurity circuit board",
    caption: "Modern cybersecurity infrastructure relies on sophisticated hardware and software integration"
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Code on monitor",
    caption: "Advanced penetration testing requires deep understanding of programming and system vulnerabilities"
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Matrix digital rain",
    caption: "The digital landscape presents both opportunities and threats in modern cybersecurity"
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "AI Robot",
    caption: "Artificial intelligence is revolutionizing both attack and defense strategies in cybersecurity"
  }
];
