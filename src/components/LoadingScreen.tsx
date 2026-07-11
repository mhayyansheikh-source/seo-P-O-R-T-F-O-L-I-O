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
    <motion.div 
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] bg-canvas flex flex-col justify-between p-6 md:p-12"
    >
      {/* Top Header */}
      <div className="flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs text-muted uppercase tracking-[0.3em]"
        >
          Portfolio 2026
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-end gap-1"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] text-muted uppercase tracking-widest mt-2">Loading Core</span>
        </motion.div>
      </div>

      {/* Center Phrase */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-4 overflow-hidden h-[100px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h2 
            key={wordIndex}
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute text-4xl md:text-6xl lg:text-7xl font-display italic text-ink/80"
          >
            {WORDS[wordIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Bottom Counter */}
      <div className="flex flex-col items-end">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-ink tabular-nums">
          {count}%
        </div>
      </div>

      {/* Progress Bar Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-hairline/50">
        <div 
          className="h-full bg-primary origin-left"
          style={{ 
            transform: `scaleX(${count / 100})`,
            boxShadow: '0 0 8px rgba(204, 120, 92, 0.35)'
          }}
        />
      </div>

    </motion.div>
  );
}
