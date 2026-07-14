import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { navLinks } from '../data/constants';

export function ContactFooter() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1
    });
  }, []);

  const marqueeText = Array(10).fill("LAUNCH YOUR BRAND • DOMINATE SEARCH • SEO USTAAD • ").join("");

  return (
    <>
      {/* Coral CTA Band */}
      <section className="bg-[#FF6B6B] py-[96px] overflow-hidden flex flex-col items-center justify-center">
        <div className="relative z-10 flex flex-col items-center w-full">
          
          {/* GSAP Marquee */}
          <div className="w-full overflow-hidden whitespace-nowrap mb-12">
            <div ref={marqueeRef} className="inline-block text-7xl md:text-9xl font-display italic text-[#FFF5EB] opacity-90">
              {marqueeText}
            </div>
          </div>

          {/* CTA */}
          <a 
            href="https://wa.me/923379912300"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-md text-base md:text-lg font-medium px-10 py-5 transition-all duration-300 hover:scale-105 bg-[#FFF5EB] text-ink overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Message on WhatsApp <span className="text-xl leading-none">↗</span>
            </span>
          </a>
        </div>
      </section>

      {/* Dark Footer */}
      <footer className="bg-surface-dark py-16">
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3 text-[14px] text-on-dark font-medium">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              Accepting new clients
            </div>
            <p className="text-on-dark-soft text-[14px] leading-relaxed">
              Ready to scale? Partner with us to build an elite web experience and dominate your search rankings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 md:gap-16">
            <div className="flex flex-col gap-3">
              <h4 className="text-on-dark text-[12px] uppercase tracking-widest font-semibold mb-2">Services</h4>
              {navLinks.find(n => n.label === 'Specialties')?.children?.map(link => (
                <a key={link.label} href={link.href} className="text-on-dark-soft hover:text-on-dark transition-colors text-[14px]">{link.label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-on-dark text-[12px] uppercase tracking-widest font-semibold mb-2">Locations</h4>
              {navLinks.find(n => n.label === 'Top Locations')?.children?.map(link => (
                <a key={link.label} href={link.href} className="text-on-dark-soft hover:text-on-dark transition-colors text-[14px]">{link.label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-on-dark text-[12px] uppercase tracking-widest font-semibold mb-2">Socials</h4>
              <a href="https://www.facebook.com/seoustaad/" target="_blank" rel="noopener noreferrer" className="text-on-dark-soft hover:text-on-dark transition-colors text-[14px]">Facebook</a>
              <a href="https://www.linkedin.com/company/becomeabrandowner-seoustaad/" target="_blank" rel="noopener noreferrer" className="text-on-dark-soft hover:text-on-dark transition-colors text-[14px]">LinkedIn</a>
              <a href="https://www.instagram.com/seoustaad" target="_blank" rel="noopener noreferrer" className="text-on-dark-soft hover:text-on-dark transition-colors text-[14px]">Instagram</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-on-dark text-[12px] uppercase tracking-widest font-semibold mb-2">Contact</h4>
              <a href="mailto:support@seoustaad.com" className="text-on-dark-soft hover:text-on-dark transition-colors text-[14px]">support@seoustaad.com</a>
              <a href="https://wa.me/923379912300" target="_blank" rel="noopener noreferrer" className="text-on-dark-soft hover:text-on-dark transition-colors text-[14px]">+92 337 9912300</a>
            </div>
          </div>

        </div>
        
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-on-dark-soft/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-on-dark-soft">
          <p>© {new Date().getFullYear()} SEO Ustaad. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-on-dark transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-on-dark transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
