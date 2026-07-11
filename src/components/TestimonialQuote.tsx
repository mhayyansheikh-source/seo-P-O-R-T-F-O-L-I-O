import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { cn } from './Button';

export function TestimonialQuote() {
  const { ref, isInView } = useInViewAnimation();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    
    const handleScroll = () => {
      // Simple parallax effect based on scroll position
      const scrollY = window.scrollY;
      // Max offset 200px
      const calculatedOffset = Math.min(scrollY * 0.15, 200);
      setOffset(calculatedOffset);
      
      animationFrameId = requestAnimationFrame(() => {});
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={ref}
      className="py-12 px-6 max-w-2xl mx-auto flex flex-col items-center text-center"
    >
      <Quote 
        className={cn(
          "w-6 h-6 text-slate-900 mb-6",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
        style={{ animationDelay: '0.1s' }}
      />
      
      <h3 
        className={cn(
          "text-display-sm md:text-display-md lg:text-display-lg text-[var(--color-secondary-dark)] mb-6 font-serif",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
        style={{ animationDelay: '0.2s' }}
      >
        'We don't just chase traffic. We build brand monopolies.'
      </h3>
      
      <p 
        className={cn(
          "italic text-sm text-[var(--color-muted-text)] mb-8 font-serif",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
        style={{ animationDelay: '0.3s' }}
      >
        SEO Ustaad
      </p>
      
      <div 
        className={cn(
          "flex items-center justify-center gap-6 md:gap-10 mb-16",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
        style={{ animationDelay: '0.4s' }}
      >
        <span className="font-medium text-slate-900 text-lg">Herbalicious</span>
        <span className="font-medium text-slate-900 text-lg">Italia Cosmetics</span>
        <span className="font-medium text-slate-900 text-lg">Nifty PS</span>
      </div>
      
      <div 
        className={cn(
          "w-full max-w-xs rounded-2xl shadow-lg overflow-hidden",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
        style={{ 
          animationDelay: '0.5s',
          transform: `translateY(${offset}px)` 
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
          alt="Professional Portrait" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
