import { motion } from 'framer-motion';

export function Stats() {
  return (
    <section className="bg-canvas py-[96px] border-y border-hairline">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-display-lg text-ink">
                1,000
              </span>
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
              <span className="text-display-lg text-ink">
                4.9/5
              </span>
            </div>
            <div className="w-12 h-px bg-primary mb-4" />
            <span className="text-body-md font-medium text-muted">
              Average Rating
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-display-lg text-ink">
                4,500
              </span>
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
