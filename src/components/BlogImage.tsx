
import React from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: string;
  height?: string;
  className?: string;
}

const BlogImage: React.FC<BlogImageProps> = ({ 
  src, 
  alt, 
  caption, 
  width = '100%', 
  height = 'auto',
  className = ''
}) => {
  return (
    <figure className={`my-8 ${className}`}>
      <div className="relative overflow-hidden rounded-lg border border-primary/20">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
          style={{ width, height }}
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-muted-foreground text-center mt-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogImage;
