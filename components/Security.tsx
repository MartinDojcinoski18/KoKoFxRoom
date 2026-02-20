import React, { useEffect } from 'react';

const Security: React.FC = () => {
  useEffect(() => {
    // 1. Disable Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, etc.)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
        e.stopPropagation();
      }
      
      // Prevent Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        e.stopPropagation();
      }

      // Prevent Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        e.stopPropagation();
      }

      // Prevent Ctrl+Shift+C (Inspect)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        e.stopPropagation();
      }

      // Prevent Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        e.stopPropagation();
      }

      // Prevent Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // 3. Aggressive Console Clearing & Debugger Trap
    // This makes it extremely annoying for anyone trying to inspect the code.
    const aggressiveProtection = () => {
        // Clear console repeatedly
        // console.clear();
        
        // This log is a decoy
        // console.log("%c SECURITY SYSTEM ACTIVE", "color: red; font-size: 20px; font-weight: bold;");
    };

    // Attach Listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    
    // Initial clear
    // aggressiveProtection();

    // Re-apply protection every 500ms (Very Aggressive)
    // const interval = setInterval(aggressiveProtection, 500);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      // clearInterval(interval);
    };
  }, []);

  return (
    // Global styles to prevent selection and image dragging
    <style>{`
      /* Disable Text Selection */
      body {
        user-select: none; /* Standard syntax */
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
      }

      /* Allow selection only on inputs so forms still work */
      input, textarea {
        user-select: text !important;
        -webkit-user-select: text !important;
      }

      /* Disable Image Dragging & Interaction */
      img {
        -webkit-user-drag: none;
        user-drag: none;
        pointer-events: none; /* Prevents right click menu on images effectively in some browsers */
      }

      /* Hide Scrollbar for cleaner look (optional, but adds to protection feel) */
      ::-webkit-scrollbar {
        width: 8px;
        background: #0B0E11;
      }
      ::-webkit-scrollbar-thumb {
        background: #333;
        border-radius: 4px;
      }
    `}</style>
  );
};

export default Security;