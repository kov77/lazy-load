import React, { useEffect, useRef } from 'react';

interface LazyImageProps {
  'data-src': string;
  alt?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 'data-src': dataSrc, alt }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && imgRef.current) {
          imgRef.current.src = dataSrc;
          observer.unobserve(imgRef.current);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [dataSrc]);

  return <img width={300} height={400} ref={imgRef} alt={alt} />;
};

export default LazyImage;
