
import React from 'react';
import ImageGallery from './ImageGallery';
import BlogImage from './BlogImage';

interface BlogImageSectionProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  title?: string;
  layout?: 'single' | 'gallery';
  className?: string;
}

const BlogImageSection: React.FC<BlogImageSectionProps> = ({ 
  images, 
  title = "Images",
  layout = "gallery",
  className = "" 
}) => {
  if (images.length === 0) return null;

  return (
    <section className={`my-12 ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold mb-6 text-primary glow-text">
          {title}
        </h3>
      )}
      
      {layout === 'single' && images.length === 1 ? (
        <BlogImage 
          src={images[0].src}
          alt={images[0].alt}
          caption={images[0].caption}
        />
      ) : (
        <ImageGallery images={images} />
      )}
    </section>
  );
};

export default BlogImageSection;
