import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Magnetic } from './Magnetic';
import { useHlsVideo } from '../hooks/useHlsVideo';
import { heroContent } from '../data/constants';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  useHlsVideo(videoRef, 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8');

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
        <motion.div style={{ y }} className="max-w-[1000px] mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center gap-6">
          
          <h1 className="hero-text text-display-xl text-[#faf9f5]" dangerouslySetInnerHTML={{ __html: heroContent.title.replace('\\n', '<br />') }}>
          </h1>
          <p className="hero-text text-[18px] text-on-dark-soft max-w-2xl font-body leading-relaxed">
            {heroContent.description}
          </p>
          <div className="hero-text flex flex-col sm:flex-row gap-4 mt-6">
            <Magnetic>
              <a href={heroContent.primaryAction.href} className="btn-primary">{heroContent.primaryAction.label}</a>
            </Magnetic>
            <Magnetic>
              <a href={heroContent.secondaryAction.href} className="btn-secondary-on-dark">{heroContent.secondaryAction.label}</a>
            </Magnetic>
          </div>

        </motion.div>
      </div>


    </section>
  );
}
