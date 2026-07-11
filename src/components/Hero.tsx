import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      


      {/* Hero Band */}
      <div className="py-[96px] bg-transparent flex-1 flex items-center justify-center relative z-10 w-full pb-20">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center gap-6">
          
          <h1 className="hero-text text-display-xl text-[#faf9f5]">
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


    </section>
  );
}
