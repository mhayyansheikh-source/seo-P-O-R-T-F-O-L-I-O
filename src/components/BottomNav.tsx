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
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out md:hidden",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-full px-2 py-2 pr-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50 flex items-center gap-4">
        <div className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-serif text-xl font-semibold">
          S
        </div>
        <a 
          href="https://wa.me/923379912300"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-active)] transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.551 4.122 1.528 5.869L.085 24l6.32-1.657A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.02c-1.89 0-3.738-.485-5.385-1.4l-.387-.215-3.993 1.047 1.066-3.89-.236-.376A9.97 9.97 0 0 1 2.016 12C2.016 6.494 6.494 2.016 12 2.016c5.506 0 9.984 4.478 9.984 9.984S17.506 22.02 12 22.02z"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
