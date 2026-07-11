import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ["Dominate", "Search", "Scale", "SEO Ustaad"];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const duration = 2700;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min((progress / duration) * 100, 100);
      
      setCount(Math.floor(percentage));
      
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % WORDS.length);
    }, 900);
    
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[var(--color-bg)] flex flex-col justify-between p-6 md:p-12">
      
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xs text-[var(--color-muted)] uppercase tracking-[0.3em]"
      >
        SEO USTAAD
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-[var(--color-text-primary)]/80"
          >
            {WORDS[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-end items-end pb-8">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-[var(--color-text-primary)] tabular-nums">
          {String(count).padStart(3, "0")}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-stroke)]/50">
        <div 
          className="h-full accent-gradient origin-left"
          style={{ 
            transform: `scaleX(${count / 100})`,
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)'
          }}
        />
      </div>

    </div>
  );
}
