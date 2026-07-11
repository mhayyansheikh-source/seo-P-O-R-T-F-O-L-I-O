import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { cn } from './Button';

export function BottomNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-full px-2 py-2 pr-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50 flex items-center gap-6">
        <div className="w-10 h-10 bg-[var(--color-primary-dark)] text-white rounded-full flex items-center justify-center font-serif text-xl font-semibold">
          S
        </div>
        <button className="text-sm font-medium text-[var(--color-primary-dark)] hover:text-[var(--color-brand-accent)] transition-colors">
          Start a chat
        </button>
      </div>
    </div>
  );
}
