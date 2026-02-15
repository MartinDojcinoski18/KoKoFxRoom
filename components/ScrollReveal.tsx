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
    // IOS FIX:
    // iPhones often fail to trigger IntersectionObserver correctly during scroll
    // due to the dynamic address bar resizing.
    // If we detect iOS, we force show the content immediately.
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isIOS) {
        setIsVisible(true);
        return;
    }

    // Standard Logic for other devices
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
        rootMargin: '100px' // Increased pixel margin for earlier triggering
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
    // If visible, reset transform
    if (isVisible) return 'translate-y-0 translate-x-0 opacity-100';

    // If hidden
    switch (direction) {
        case 'up': return 'translate-y-8 opacity-0';
        case 'left': return '-translate-x-8 opacity-0';
        case 'right': return 'translate-x-8 opacity-0';
        case 'none': return 'opacity-0';
        default: return 'translate-y-8 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${className} ${getTransform()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;