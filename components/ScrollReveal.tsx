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
    // Reduced time to 1000ms. If the observer fails on mobile, 
    // force show content quickly so the page isn't blank.
    const safetyTimer = setTimeout(() => {
        if (!isVisible) setIsVisible(true);
    }, 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
          clearTimeout(safetyTimer);
        }
      },
      { 
        threshold: 0, 
        // Increased margin to 20%. This means the animation triggers 
        // BEFORE the element even enters the screen (pre-loading it),
        // which prevents blank spaces during fast scrolling on phones.
        rootMargin: '20%' 
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
        case 'up': return 'translate-y-10'; // Reduced movement distance for smoother mobile feel
        case 'left': return '-translate-x-8';
        case 'right': return 'translate-x-8';
        case 'none': return '';
        default: return 'translate-y-10';
      }
    }
    return 'translate-y-0 translate-x-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-[opacity,transform] ${className} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;