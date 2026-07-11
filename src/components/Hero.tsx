import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full min-h-screen flex flex-col relative overflow-hidden bg-surface-dark">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-80 mix-blend-screen"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-surface-dark/40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-transparent to-surface-dark pointer-events-none"></div>
      
      {/* Top Navigation */}
      <nav className="w-full h-[64px] bg-transparent flex items-center justify-between px-6 md:px-12 relative z-50">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-on-dark)">
            <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
          </svg>
          <span className="font-display text-[22px] font-medium tracking-tight text-on-dark">SEO Ustaad</span>
        </div>

        <div className="hidden md:flex items-center gap-6 font-medium text-[14px] text-on-dark">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#packages" className="hover:text-primary transition-colors">Packages</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://becomeabrandowner.seoustaad.com/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-primary">Talk to an Expert</a>
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-on-dark p-2 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Band */}
      <div className="hero-band bg-transparent flex-1 flex items-center justify-center relative z-10 w-full pb-20">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center gap-6">
          
          <h1 className="hero-text text-display-xl text-ink">
            Dominate Digital Search<br />With SEO Ustaad.
          </h1>
          <p className="hero-text text-[18px] text-on-dark-soft max-w-2xl font-body leading-relaxed">
            Premium Web Development, ROI-Driven SEO, and Meta Ads specialized for the Pakistani market. We don't just build sites; we build search authority.
          </p>
          <div className="hero-text flex flex-col sm:flex-row gap-4 mt-6">
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#work" className="btn-secondary-on-dark">Featured works</a>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[100] bg-surface-dark flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 text-on-dark p-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <nav className="flex flex-col items-center gap-8 text-2xl font-display text-on-dark">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Home</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Services</a>
              <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Work</a>
              <a href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Packages</a>
              <a href="https://becomeabrandowner.seoustaad.com/" target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 text-[16px] font-body">Talk to an Expert</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
