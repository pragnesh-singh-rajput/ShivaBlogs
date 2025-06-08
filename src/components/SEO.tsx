
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  category?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "ShivaBlogs - Cybersecurity & Tech Insights by Pragnesh Singh Rajput",
  description = "Professional cybersecurity blog featuring penetration testing, Linux security, vulnerability research, ethical hacking, and technology insights.",
  keywords = "cybersecurity, penetration testing, ethical hacking, linux security, tech blog, Pragnesh Singh Rajput, ShivaBlogs",
  author = "Pragnesh Singh Rajput",
  url = "https://shivablogs.com/",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  type = "website",
  publishedTime,
  modifiedTime,
  category
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:url', url);
    updateMetaTag('og:image', image);
    updateMetaTag('og:type', type);

    // Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Article specific tags
    if (type === 'article') {
      updateMetaTag('og:type', 'article');
      if (publishedTime) updateMetaTag('article:published_time', publishedTime);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime);
      if (author) updateMetaTag('article:author', author);
      if (category) updateMetaTag('article:section', category);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, keywords, author, url, image, type, publishedTime, modifiedTime, category]);

  return null;
};

export default SEO;
