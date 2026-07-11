import React from 'react';
import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { cn } from './Button'; // Reusing cn utility

export function HeroSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section 
      ref={ref}
      className="flex flex-col items-center justify-center w-full px-6 pt-12 md:pt-16 pb-16"
    >
      <div className="max-w-[440px] w-full flex flex-col items-start">
        
        {/* Logo */}
        <h1 
          className={cn(
            "font-serif text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[var(--color-primary-dark)] tracking-tight mb-4",
            isInView ? "animate-fade-in-up" : "opacity-0"
          )}
          style={{ animationDelay: '0.1s' }}
        >
          SEO Ustaad
        </h1>

        {/* Tagline */}
        <p 
          className={cn(
            "font-mono text-xs md:text-sm text-[var(--color-primary-dark)] mb-2 uppercase tracking-wider",
            isInView ? "animate-fade-in-up" : "opacity-0"
          )}
          style={{ animationDelay: '0.2s' }}
        >
          The growth engine behind category-leading brands
        </p>

        {/* Main Heading */}
        <h2 
          className={cn(
            "text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[var(--color-secondary-dark)] tracking-tight mb-6",
            isInView ? "animate-fade-in-up" : "opacity-0"
          )}
          style={{ animationDelay: '0.3s' }}
        >
          <span className="block font-sans">Scale your brand,</span>
          <span className="block font-serif text-[var(--color-brand-accent)]">own your niche.</span>
        </h2>

        {/* Description Paragraphs */}
        <div 
          className={cn(
            "flex flex-col gap-6 text-sm md:text-base text-[var(--color-primary-dark)] leading-relaxed mt-2",
            isInView ? "animate-fade-in-up" : "opacity-0"
          )}
          style={{ animationDelay: '0.4s' }}
        >
          <p>
            I spent years reverse-engineering search algorithms to understand what makes brands truly visible. I founded SEO Ustaad to bring enterprise-level growth strategies to ambitious founders.
          </p>
          <p>
            We are a deliberately specialized team. We focus on data-driven organic growth, high-converting copy, and brand authority that turns traffic into revenue.
          </p>
          <p className="font-medium">
            Growth partnerships start at $5,000 per month.
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
