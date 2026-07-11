import React, { useState, useRef, useEffect } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

interface TrailImage {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

export function PartnerSection() {
  const { ref, isInView } = useInViewAnimation();
  const [trails, setTrails] = useState<TrailImage[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastSpawnTime = useRef<number>(0);
  const trailIdCounter = useRef<number>(0);

  // Handle mouse move to spawn trail images
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    // Spawn at most every 80ms
    if (now - lastSpawnTime.current < 80) return;
    
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotation = Math.random() * 20 - 10; // -10 to 10 degrees

    const newTrail: TrailImage = {
      id: trailIdCounter.current++,
      x,
      y,
      rotation
    };

    setTrails(prev => [...prev, newTrail]);
    lastSpawnTime.current = now;

    // Remove trail after 1000ms
    setTimeout(() => {
      setTrails(prev => prev.filter(t => t.id !== newTrail.id));
    }, 1000);
  };

  return (
    <section ref={ref} className="w-full py-12 px-6">
      <div 
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className={cn(
          "max-w-7xl mx-auto py-32 md:py-48 bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden flex flex-col items-center justify-center text-center cursor-crosshair",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        {/* Trail Images */}
        {trails.map(trail => (
          <div
            key={trail.id}
            className="absolute pointer-events-none w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-lg animate-trail-fade"
            style={{
              left: trail.x,
              top: trail.y,
              transform: `translate(-50%, -50%) rotate(${trail.rotation}deg)`,
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" 
              alt="trail" 
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="relative z-10 flex flex-col items-center pointer-events-none">
          <h2 className="text-display-lg lg:text-display-xl text-[var(--color-primary-dark)] mb-12">
            Partner with us
          </h2>
          
          <div className="pointer-events-auto">
            <Button variant="primary" className="flex items-center gap-3 pl-2 pr-6 py-2">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" 
                alt="Avatar" 
                className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
              />
              <span>Start chat with SEO Ustaad</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Quick inline cn utility since we didn't export it globally
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
