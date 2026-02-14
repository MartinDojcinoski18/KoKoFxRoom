import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  direction?: 'up' | 'left' | 'right' | 'none'; // Direction of entry
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // SAFETY FALLBACK:
    // On some mobile devices, if the observer fails to fire (rare but possible during fast scrolls),
    // force visibility after a short timeout so content is never stuck as invisible.
    const safetyTimer = setTimeout(() => {
        if (!isVisible) setIsVisible(true);
    }, 3000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger as soon as ANY pixel is visible (threshold: 0)
        // This fixes the issue where elements wouldn't load on mobile scroll
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
          clearTimeout(safetyTimer);
        }
      },
      { 
        threshold: 0, // Trigger immediately
        rootMargin: '100px' // Start animating 100px BEFORE the element enters the viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      clearTimeout(safetyTimer);
    };
  }, []);

  // Determine initial transform based on direction
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translate-y-16'; // Increased distance slightly for better effect
        case 'left': return '-translate-x-12';
        case 'right': return 'translate-x-12';
        case 'none': return '';
        default: return 'translate-y-16';
      }
    }
    return 'translate-y-0 translate-x-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out will-change-[opacity,transform] ${className} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;