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
    <div className="fixed inset-0 z-[9999] bg-[var(--color-canvas)] flex flex-col justify-between p-6 md:p-12">
      {/* Top Header */}
      <div className="flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs text-[var(--color-muted)] uppercase tracking-[0.3em]"
        >
          Portfolio 2026
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-end gap-1"
        >
          <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
          <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-widest mt-2">Loading Core</span>
        </motion.div>
      </div>

      {/* Center Phrase */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-display italic text-[var(--color-ink)]/80"
        >
          Building Brand Monopolies
        </motion.h2>
      </div>

      {/* Bottom Counter */}
      <div className="flex flex-col items-end">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-[var(--color-ink)] tabular-nums">
          {count}%
        </div>
      </div>

      {/* Progress Bar Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-hairline)]/50">
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
