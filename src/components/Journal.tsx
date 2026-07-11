import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { 
    title: "Web Development", 
    items: ["Custom WordPress Themes", "Shopify Liquid Mastery", "React & Next.js Apps", "Flutter Mobile Apps"], 
    icon: "💻"
  },
  { 
    title: "SEO & AEO", 
    items: ["Technical SEO Audits", "Local SEO Domination", "Answer Engine Opt. (AEO)", "E-commerce SEO Growth"], 
    icon: "🔍"
  },
  { 
    title: "SMM & Meta Ads", 
    items: ["High-ROAS Meta Ads", "Video Reels Production", "Account Management", "Lead Generation Funnels"], 
    icon: "📈"
  }
];

export function Journal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !scrollContainerRef.current) return;

    // Calculate how far to scroll horizontally
    const scrollWidth = scrollContainerRef.current.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(scrollContainerRef.current, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="bg-canvas overflow-hidden">
      <div className="h-screen flex flex-col justify-center py-[clamp(4rem,10vw,8rem)] relative">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 mb-12 flex-shrink-0">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
          >
            <div>
              <h2 className="text-display-lg text-ink mb-4">
                Our Specialized Services
              </h2>
              <p className="text-body-md text-muted max-w-sm">
                Tailored digital solutions designed to dominate the 2026 search landscape.
              </p>
            </div>

            <a href="#packages" className="btn-secondary">
              View Premium Gigs
            </a>
          </motion.div>
        </div>

        {/* Services Horizontal Scroll Grid */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 px-6 md:px-12 w-max items-stretch"
        >
          {SERVICES.map((service, i) => (
            <div 
              key={i}
              className="feature-card flex flex-col gap-6 group hover:bg-surface-dark-elevated transition-colors duration-300 w-[300px] md:w-[400px] flex-shrink-0"
            >
              <div className="w-12 h-12 rounded-full bg-hairline flex items-center justify-center text-2xl group-hover:bg-surface-dark transition-colors">
                {service.icon}
              </div>
              
              <div>
                <h3 className="text-title-lg font-display text-ink group-hover:text-[var(--color-primary)] group-hover:translate-x-1 mb-4 transition-all duration-300">
                  {service.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-[14px] text-muted group-hover:text-muted-soft transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
