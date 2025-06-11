
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className = '' }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 ${className}`}>
        {images.map((image, index) => (
          <figure key={index} className="group cursor-pointer">
            <div 
              className="relative overflow-hidden rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            {image.caption && (
              <figcaption className="text-sm text-muted-foreground text-center mt-2 italic">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-primary transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-4xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            {images[selectedImage].caption && (
              <p className="text-white text-center mt-4 italic">
                {images[selectedImage].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
