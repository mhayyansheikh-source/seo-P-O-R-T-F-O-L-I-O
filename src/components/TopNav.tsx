import { useState, useEffect } from 'react';
import { cn } from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, globalConstants } from '../data/constants';
import { Link } from 'react-router-dom';

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-12",
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm" : "bg-transparent py-6"
      )}>
        <Link to="/" className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill={scrolled ? "#cc785c" : "#faf9f5"}>
            <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
          </svg>
          <span className={cn("font-display text-[22px] font-medium tracking-tight transition-colors duration-300", scrolled ? "text-[#141413]" : "text-[#faf9f5]")}>
            {globalConstants.brandName}
          </span>
        </Link>

        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={cn("hover:text-[#cc785c] transition-colors", scrolled ? "text-[#141413]" : "text-[#faf9f5]")}>
              {link.label}
            </a>
          ))}
          <a 
            href={globalConstants.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-full hover:bg-[var(--color-primary-active)] transition-colors flex items-center gap-2 font-body"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.551 4.122 1.528 5.869L.085 24l6.32-1.657A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.02c-1.89 0-3.738-.485-5.385-1.4l-.387-.215-3.993 1.047 1.066-3.89-.236-.376A9.97 9.97 0 0 1 2.016 12C2.016 6.494 6.494 2.016 12 2.016c5.506 0 9.984 4.478 9.984 9.984S17.506 22.02 12 22.02z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={cn("md:hidden p-2 transition-colors", scrolled ? "text-[#141413]" : "text-[#faf9f5]")}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[100] bg-surface-dark flex flex-col items-center justify-center"
          >
              <button 
              className="absolute top-6 right-6 text-[#faf9f5] p-2 hover:text-[#cc785c] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <nav className="flex flex-col items-center gap-8 text-2xl font-display text-[#faf9f5]">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#cc785c] transition-colors">
                  {link.label}
                </a>
              ))}
              <a href={globalConstants.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 text-[16px] font-body flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.551 4.122 1.528 5.869L.085 24l6.32-1.657A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.02c-1.89 0-3.738-.485-5.385-1.4l-.387-.215-3.993 1.047 1.066-3.89-.236-.376A9.97 9.97 0 0 1 2.016 12C2.016 6.494 6.494 2.016 12 2.016c5.506 0 9.984 4.478 9.984 9.984S17.506 22.02 12 22.02z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
