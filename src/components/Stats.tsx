import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

function Counter({ from = 0, to, duration = 2, decimals = 0 }: { from?: number, to: number, duration?: number, decimals?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, decimals, isInView]);

  return <span ref={nodeRef} className="text-display-lg text-ink">{from}</span>;
}

export function Stats() {
  return (
    <section className="bg-canvas py-[96px] border-y border-hairline">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-2 mb-2">
              <Counter to={1000} duration={2} />
              <span className="text-display-lg text-primary">+</span>
            </div>
            <div className="w-12 h-px bg-primary mb-4" />
            <span className="text-body-md font-medium text-muted">
              Businesses Trusted
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-2 mb-2">
              <Counter to={4.9} duration={2} decimals={1} />
            </div>
            <div className="w-12 h-px bg-primary mb-4" />
            <span className="text-body-md font-medium text-muted">
              Average Rating
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-2 mb-2">
              <Counter to={4500} duration={2} />
              <span className="text-display-lg text-primary">+</span>
            </div>
            <div className="w-12 h-px bg-primary mb-4" />
            <span className="text-body-md font-medium text-muted">
              Monthly Visitors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
