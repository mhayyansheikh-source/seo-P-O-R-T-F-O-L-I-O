import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { cn } from './Button';

const TESTIMONIALS = [
  {
    name: "Hasan Tariq",
    role: "CEO, Herbalicious",
    text: "SEO Ustaad completely restructured our funnel. Our lead volume and organic traffic tripled in 90 days. Incredible growth.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Dr. Sehar Taskeen",
    role: "Founder, Dr. Sehar Clinic",
    text: "They didn't just get us to page one, they established our brand authority. The best digital investment we've made.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Ali Raza",
    role: "Director, Ali Bags",
    text: "Working with SEO Ustaad transformed our e-commerce vision into a high-converting reality. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Omar Farooq",
    role: "Co-founder, The Local Crafts",
    text: "The technical SEO and design quality exceeded all expectations. We dominate our niche now.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Sarah Ahmed",
    role: "Head of Marketing, Nifty PS",
    text: "A masterclass in organic growth. From start to finish, the strategy was flawless and results were delivered fast.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  }
];

export function TestimonialCarousel() {
  const { ref, isInView } = useInViewAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);



  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section 
      ref={ref}
      className={cn(
        "w-full py-20 overflow-hidden",
        isInView ? "animate-fade-in-up" : "opacity-0"
      )}
    >
      <div className="md:max-w-4xl md:ml-auto px-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <h3 className="font-serif text-[32px] md:text-[40px] text-[var(--color-primary-dark)] tracking-tight">
          What partners say
        </h3>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-black text-black" />
            ))}
          </div>
          <span className="font-medium text-sm ml-2">Clutch 5/5</span>
        </div>
      </div>

      <div 
        className="relative px-6 md:pl-[calc(100vw-56rem+1.5rem)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-6 transition-transform duration-800 ease-[cubic-bezier(0.4,0,0.2,1)]"
             style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem))` }}>
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="min-w-[calc(100vw-48px)] md:min-w-[427.5px] bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8 flex-shrink-0"
            >
              <Quote className="w-8 h-8 text-[var(--color-brand-accent)] mb-6 opacity-40" />
              <p className="text-base text-[var(--color-secondary-dark)] leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-semibold text-sm text-[var(--color-primary-dark)]">{t.name}</h5>
                  <p className="text-xs text-[var(--color-muted-text)]">→ {t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-8">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-[var(--color-secondary-dark)]/20 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-[var(--color-secondary-dark)]/20 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
