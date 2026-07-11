import React from 'react';
import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { cn } from './Button';

export function PricingSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section 
      ref={ref}
      className="w-full py-12 px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl md:ml-auto">
        
        {/* Card 1: Retainer (Dark) */}
        <div 
          className={cn(
            "rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 bg-[var(--color-primary-dark)] text-[var(--color-light-text)] shadow-inner flex flex-col",
            isInView ? "animate-fade-in-up" : "opacity-0"
          )}
          style={{ animationDelay: '0.1s' }}
        >
          <h4 className="text-[22px] font-medium mb-3">Growth Partnership</h4>
          <p className="text-[var(--color-light-muted)] mb-8 flex-grow">
            A dedicated growth and SEO team. <br/>
            We work directly with your brand to dominate.
          </p>
          <div className="mb-6">
            <span className="text-2xl font-serif">$5,000</span>
            <span className="block text-sm text-[var(--color-light-muted)] mt-1">Monthly</span>
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="secondary" className="w-full">Start a chat</Button>
            <Button variant="primary" className="w-full border border-white/20 bg-transparent shadow-none hover:bg-white/10">How it works</Button>
          </div>
        </div>

        {/* Card 2: Custom Project (Light) */}
        <div 
          className={cn(
            "rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col",
            isInView ? "animate-fade-in-up" : "opacity-0"
          )}
          style={{ animationDelay: '0.2s' }}
        >
          <h4 className="text-[22px] font-medium text-[var(--color-secondary-dark)] mb-3">Brand Authority Audit</h4>
          <p className="text-[var(--color-muted-text)] mb-8 flex-grow">
            Fixed scope, actionable roadmap. <br/>
            The blueprint to outrank your competitors.
          </p>
          <div className="mb-6">
            <span className="text-2xl font-serif text-[var(--color-secondary-dark)]">$5,000</span>
            <span className="block text-sm text-[var(--color-muted-text)] mt-1">Minimum</span>
          </div>
          <div className="flex flex-col gap-3 mt-auto">
            <Button variant="tertiary" className="w-full">Start a chat</Button>
          </div>
        </div>

      </div>
    </section>
  );
}
