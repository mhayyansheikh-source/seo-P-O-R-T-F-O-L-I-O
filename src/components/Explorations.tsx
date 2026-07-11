import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Image } from './Image';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
];

export function Explorations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !pinnedRef.current || !column1Ref.current || !column2Ref.current) return;

    const ctx = gsap.context(() => {
      // Pin the center content
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: pinnedRef.current,
        pinSpacing: false,
      });

      // Parallax columns
      gsap.to(column1Ref.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        }
      });

      gsap.to(column2Ref.current, {
        yPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="packages" ref={sectionRef} className="relative w-full min-h-[300vh] bg-canvas">
        
        {/* Layer 1: Pinned Center */}
        <div ref={pinnedRef} className="h-screen w-full flex items-center justify-center z-10 pointer-events-none">
          <div className="flex flex-col items-center text-center px-4 bg-canvas/80 backdrop-blur-md py-12 px-8 rounded-sm pointer-events-auto border border-hairline/20 shadow-md">
            
            <h2 className="text-display-lg text-ink mb-6">
              Premium Packages
            </h2>
            
            <p className="text-body-md text-muted max-w-sm mb-10">
              From technical SEO to full-stack development, structured for massive ROI. We have 25+ premium gigs designed for your growth.
            </p>

            <a 
              href="https://becomeabrandowner.seoustaad.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Talk to an Expert
            </a>
          </div>
        </div>

        {/* Layer 2: Parallax Columns */}
        <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none z-20">
          <div className="max-w-[1400px] mx-auto w-full h-full relative">
            <div className="absolute top-1/4 left-4 md:left-12 pointer-events-auto" ref={column1Ref}>
              <div className="flex flex-col gap-12 md:gap-40">
                {[IMAGES[0], IMAGES[1], IMAGES[2]].map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedImg(img)}
                    className="w-[200px] md:w-[320px] aspect-square bg-surface-card border border-hairline rounded-sm overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-500 shadow-xl"
                    style={{ transform: `rotate(${i % 2 === 0 ? -6 : 4}deg)` }}
                  >
                    <Image src={img} alt="Exploration" className="w-full h-full object-cover transition-all duration-500" containerClassName="w-full h-full" />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-1/2 right-4 md:right-12 pointer-events-auto" ref={column2Ref}>
              <div className="flex flex-col gap-12 md:gap-40">
                {[IMAGES[3], IMAGES[4], IMAGES[5]].map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedImg(img)}
                    className="w-[200px] md:w-[320px] aspect-square bg-surface-card border border-hairline rounded-sm overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-500 shadow-xl"
                    style={{ transform: `rotate(${i % 2 === 0 ? 5 : -3}deg)` }}
                  >
                    <Image src={img} alt="Exploration" className="w-full h-full object-cover transition-all duration-500" containerClassName="w-full h-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[99999] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <img src={selectedImg} alt="Lightbox" className="max-w-full max-h-[90vh] object-contain rounded-sm" />
        </div>
      )}
    </>
  );
}
