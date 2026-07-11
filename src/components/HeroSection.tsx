import React from 'react';
import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { cn } from './Button'; // Reusing cn utility

export function HeroSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section 
      ref={ref}
      className="flex flex-col items-center justify-center w-full px-6 pt-24 md:pt-32 pb-24 md:pb-32"
    >
      <div className="max-w-[440px] md:max-w-2xl lg:max-w-4xl w-full flex flex-col items-start">
        
        {/* Logo */}
        <h1 
          className={cn(
            "text-display-sm md:text-display-md lg:text-display-lg font-semibold text-[var(--color-primary)] mb-4",
            isInView ? "animate-fade-in-up" : "opacity-0"
          )}
          style={{ animationDelay: '0.1s' }}
        >
          SEO Ustaad
        </h1>

        {/* Tagline */}
        <p 
          className={cn(
            "font-mono text-xs md:text-sm text-[var(--color-primary)] mb-2 uppercase tracking-wider",
            isInView ? "animate-fade-in-up" : "opacity-0"
          )}
          style={{ animationDelay: '0.2s' }}
        >
          The growth engine behind category-leading brands
        </p>

        {/* Main Heading */}
        <h2 
          className={cn(
            "text-display-sm md:text-display-md lg:text-display-lg text-[var(--color-ink)] mb-6",
            isInView ? "animate-fade-in-up" : "opacity-0"
          )}
          style={{ animationDelay: '0.3s' }}
        >
          <span className="block font-sans">Scale your brand,</span>
          <span className="block font-serif text-[var(--color-primary)]">own your niche.</span>
        </h2>

        {/* Description Paragraphs */}
        <div 
          className={cn(
            "flex flex-col gap-6 text-sm md:text-base text-[var(--color-primary)] leading-relaxed mt-2",
            isInView ? "animate-fade-in-up" : "opacity-0"
          )}
          style={{ animationDelay: '0.4s' }}
        >
          <p>
            After years of reverse-engineering search algorithms to uncover what makes brands truly visible, I founded SEO Ustaad to bring enterprise-level growth strategies to ambitious founders.
          </p>
          <p>
            Today, we are a deliberately specialized team focused on data-driven organic growth, high-converting copy, and brand authority—turning your traffic into measurable revenue.
          </p>
          <p className="font-semibold">
            Growth partnerships start at $999 per month.
          </p>
        </div>

        {/* Buttons */}
        <div 
          className={cn(
            "flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 w-full sm:w-auto",
            isInView ? "animate-fade-in-up" : "opacity-0"
          )}
          style={{ animationDelay: '0.5s' }}
        >
          <Button variant="primary" className="w-full sm:w-auto">
            Start a chat
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto">
            View packages
          </Button>
        </div>

      </div>
    </section>
  );
}
