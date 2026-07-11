import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { cn } from './Button';

export function Footer() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <footer ref={ref} className="w-full bg-canvas py-[96px] border-t border-hairline">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div 
          className={cn(
            "flex flex-col md:flex-row justify-between items-start gap-16 md:gap-12",
            isInView ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          <div className="flex-1">
            <h2 className="text-display-lg text-ink mb-6 max-w-lg">
              Let's build something extraordinary.
            </h2>
            <p className="text-body-md text-muted max-w-md mb-8">
              Ready to dominate search and scale your brand? Connect with us to discuss your next big move.
            </p>
            <a href="mailto:hello@seoustaad.com" className="btn-primary inline-flex">
              Start a conversation
            </a>
          </div>

          <div className="flex flex-row gap-12 md:gap-24 pt-4 md:pt-0">
            <ArrowUpRight className="w-6 h-6 text-primary hidden sm:block" />
            
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-ink text-[14px] uppercase tracking-widest mb-2">Explore</h4>
              <a href="#services" className="text-body-md text-muted hover:text-ink transition-colors">Services</a>
              <a href="#work" className="text-body-md text-muted hover:text-ink transition-colors">Work</a>
              <a href="#about" className="text-body-md text-muted hover:text-ink transition-colors">About</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-ink text-[14px] uppercase tracking-widest mb-2">Connect</h4>
              <a href="https://x.com/seoustaad" target="_blank" rel="noopener noreferrer" className="text-body-md text-muted hover:text-ink transition-colors">X.com</a>
              <a href="https://linkedin.com/company/seoustaad" target="_blank" rel="noopener noreferrer" className="text-body-md text-muted hover:text-ink transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
