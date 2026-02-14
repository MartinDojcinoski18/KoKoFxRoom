import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null); // The center element
  const followerRef = useRef<HTMLDivElement>(null); // The trailing ring
  
  const mouse = useRef({ x: -100, y: -100 });
  const follower = useRef({ x: -100, y: -100 });
  
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only run on devices that support hover (Desktops)
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktop) return;

    setIsVisible(true);

    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Move center dot instantly for responsiveness
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const animate = () => {
      // Smooth lerp for follower (0.12 = slightly heavier/luxurious feel)
      follower.current.x += (mouse.current.x - follower.current.x) * 0.12; 
      follower.current.y += (mouse.current.y - follower.current.y) * 0.12;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${follower.current.x}px, ${follower.current.y}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       // Check for interactive elements
       const isLink = target.closest('a, button, [role="button"], input, textarea, .cursor-pointer');
       setIsHovering(!!isLink);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor: Gold Diamond Sniper Point */}
      <div 
        ref={cursorRef} 
        className={`fixed top-0 left-0 w-2.5 h-2.5 bg-trading-accent rotate-45 pointer-events-none z-[9999] -ml-[5px] -mt-[5px] mix-blend-difference transition-all duration-200 ease-out will-change-transform shadow-[0_0_10px_rgba(212,175,55,0.8)]
            ${isHovering ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
        `}
      />
      
      {/* Follower: Sniper Scope Ring */}
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] transition-all duration-300 ease-out will-change-transform flex items-center justify-center
            ${isHovering 
                ? 'w-14 h-14 -ml-7 -mt-7 border-trading-accent/40 bg-trading-accent/10 backdrop-blur-[1px]' 
                : 'w-10 h-10 -ml-5 -mt-5 border-white/20'
            }
            ${isClicking ? 'scale-75 border-trading-accent bg-trading-accent/20' : 'scale-100'}
        `}
      >
        {/* Center Crosshair (Only visible on hover/action) */}
        <div className={`w-1 h-1 bg-trading-accent rounded-full transition-opacity duration-200 ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Outer Ring Pulse on Hover */}
        <div className={`absolute inset-0 rounded-full border border-trading-accent/20 transition-all duration-500 ${isHovering ? 'scale-125 opacity-100' : 'scale-100 opacity-0'}`}></div>
      </div>
    </>
  );
};

export default CustomCursor;