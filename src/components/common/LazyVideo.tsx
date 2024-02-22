import React, { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  type: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src, type }) => {
  const videoRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          setIsVisible(true);
          observer.unobserve(videoRef.current);
        }
      });
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.src = src;
      videoRef.current.type = type;
    }
  }, [isVisible, src, type]);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <video
        ref={videoRef}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        autoPlay
        muted
        loop
        playsInline
      >
      </video>
    </div>
  );
};

export default LazyVideo;
