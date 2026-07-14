import React, { useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { cn } from './Button';
import { Image } from './Image';

type Category = 'All' | 'E-Commerce & Brands' | 'Healthcare & Clinics' | 'Corporate & B2B Services' | 'Lifestyle & Hospitality';

const PROJECTS = [
  // E-Commerce & Brands
  { name: 'Herbalicious', url: 'https://herbalicious-shop.com/', category: 'E-Commerce & Brands', image: '/images/projects/herbalicious.jpg', desc: 'Premium botanical e-commerce' },
  { name: 'Italia Cosmetics', url: 'https://italiacosmetics.com/', category: 'E-Commerce & Brands', image: '/images/projects/italia-cosmetics.jpg', desc: 'Luxury beauty and cosmetics storefront' },
  { name: 'The Local Crafts', url: 'https://thelocalcrafts.com/', category: 'E-Commerce & Brands', image: '/images/projects/the-local-crafts.jpg', desc: 'Handcrafted artisan goods' },
  { name: 'Ali Bags', url: 'https://ali-bags82-premium-leather-bags-in.vercel.app/', category: 'E-Commerce & Brands', image: '/images/projects/ali-bags.jpg', desc: 'Premium leather goods' },
  { name: 'Zarr Livid', url: 'https://zarr-livid.vercel.app/', category: 'E-Commerce & Brands', image: '/images/projects/zarr-livid.jpg', desc: 'Modern retail experience' },
  { name: 'Peteora', url: 'https://peteora.com/', category: 'E-Commerce & Brands', image: '/images/projects/peteora.jpg', desc: 'Specialized brand storefront' },
  
  // Healthcare & Clinics
  { name: 'Dr. Sehar Taskeen', url: 'https://drsehartaskeen.online/', category: 'Healthcare & Clinics', image: '/images/projects/dr-sehar-taskeen.jpg', desc: 'Medical professional portfolio' },
  { name: 'Dr. Aman Jafar MD', url: 'https://dramanjafarmd-com.vercel.app/', category: 'Healthcare & Clinics', image: '/images/projects/dr-aman-jafar-md.jpg', desc: 'Clinical practice website' },
  { name: 'Pharchiro', url: 'https://pharchiro-com.vercel.app/', category: 'Healthcare & Clinics', image: '/images/projects/pharchiro.jpg', desc: 'Chiropractic and wellness services' },
  
  // Corporate & B2B Services
  { name: 'SEO Ustaad', url: 'https://seoustaad.com/', category: 'Corporate & B2B Services', image: '/images/projects/seo-ustaad.jpg', desc: 'Leading digital agency in Pakistan' },
  { name: 'Become A Brand Owner', url: 'https://becomeabrandowner.seoustaad.com/', category: 'Corporate & B2B Services', image: '/images/projects/become-a-brand-owner.jpg', desc: 'Brand building masterclass & community' },
  { name: 'Nifty PS', url: 'https://niftyps.com.au/', category: 'Corporate & B2B Services', image: '/images/projects/nifty-ps.jpg', desc: 'Australian property services' },
  { name: 'Native Roofing', url: 'https://native-roofing-enterprises.vercel.app/', category: 'Corporate & B2B Services', image: '/images/projects/native-roofing.jpg', desc: 'Commercial roofing enterprise' },
  { name: 'Total Mens', url: 'https://totalmens-com.vercel.app/', category: 'Corporate & B2B Services', image: '/images/projects/total-mens.jpg', desc: 'Men\'s corporate services' },
  { name: 'Manageable Living', url: 'https://manageableliving.net/', category: 'Corporate & B2B Services', image: '/images/projects/manageable-living.jpg', desc: 'Property management solutions' },
  { name: 'Manageable Services', url: 'https://manageableservices.com/', category: 'Corporate & B2B Services', image: '/images/projects/manageable-services.jpg', desc: 'B2B service provider' },
  { name: 'Kits UAE', url: 'https://kitsuae.com/', category: 'Corporate & B2B Services', image: '/images/projects/kits-uae.jpg', desc: 'UAE commercial operations' },

  // Lifestyle & Hospitality
  { name: 'ARB Farms', url: 'https://www.arbfarms.com/', category: 'Lifestyle & Hospitality', image: '/images/projects/arb-farms.jpg', desc: 'Agricultural lifestyle brand' },
  { name: 'La Pasha Lounge', url: 'https://lapashalounge.vercel.app/', category: 'Lifestyle & Hospitality', image: '/images/projects/la-pasha-lounge.jpg', desc: 'Premium dining and lounge experience' },
  { name: 'Uzma Shadi', url: 'https://uzmashadi-com.vercel.app/', category: 'Lifestyle & Hospitality', image: '/images/projects/uzma-shadi.jpg', desc: 'Wedding and event planning' },
  { name: 'Cap Coral', url: 'https://cap-coral.vercel.app/', category: 'Lifestyle & Hospitality', image: '/images/projects/cap-coral.jpg', desc: 'Coastal lifestyle destination' },
];

const CATEGORIES: Category[] = ['All', 'E-Commerce & Brands', 'Healthcare & Clinics', 'Corporate & B2B Services', 'Lifestyle & Hospitality'];

export function ProjectsSection() {
  const { ref, isInView } = useInViewAnimation();
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section ref={ref} className="max-w-[1200px] mx-auto px-6 py-24 md:py-32 w-full">
      <div 
        className={cn(
          "mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        <h2 className="text-display-md md:text-display-lg text-[var(--color-primary)]">
          Our Digital Footprint
        </h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat 
                  ? "bg-[var(--color-primary)] text-white" 
                  : "bg-gray-100 text-[var(--color-muted)] hover:bg-gray-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {filteredProjects.map((project, index) => (
          <a 
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group flex flex-col gap-4 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2",
              isInView ? "animate-fade-in-up" : "opacity-0"
            )}
            style={{ animationDelay: `${0.1 * (index % 4)}s` }}
          >
            <Image 
              containerClassName="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative"
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-primary)]/10 group-hover:bg-transparent transition-colors duration-300 rounded-2xl pointer-events-none" />
            
            <div className="flex flex-col ml-4">
              <h3 className="font-serif text-2xl font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                {project.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
