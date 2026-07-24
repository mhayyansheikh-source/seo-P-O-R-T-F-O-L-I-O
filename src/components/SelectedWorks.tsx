import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Image } from './Image';

type Category = 'All' | 'E-Commerce & Brands' | 'Healthcare & Clinics' | 'Corporate & B2B Services' | 'Lifestyle & Hospitality' | 'Mobile Apps';

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
  { name: 'The Back Nine Golf', url: 'https://the-back-nine-golf-website.pages.dev/', category: 'Lifestyle & Hospitality', image: '/images/projects/the-back-nine-golf.png', desc: 'Premier Golf Club experience' },
  { name: 'Super Cars Animated', url: 'https://super-cars-animated.pages.dev/', category: 'Lifestyle & Hospitality', image: '/images/projects/super-cars-animated.jpg', desc: 'Interactive animated luxury car showcase' },

  // Mobile Apps
  { name: 'Mobile App Showcase', url: 'https://appetize.io/embed/b_7gebesauxqdpahonsxiwu3l7fa', category: 'Mobile Apps', image: '', embedUrl: 'https://appetize.io/embed/b_7gebesauxqdpahonsxiwu3l7fa', desc: 'Flutter/React Mobile app development' },
];

const CATEGORIES: Category[] = ['All', 'E-Commerce & Brands', 'Healthcare & Clinics', 'Corporate & B2B Services', 'Lifestyle & Hospitality', 'Mobile Apps'];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const isDarkCard = index % 3 === 1; // Alternating rhythm
  const isEvenColumn = index % 2 === 1; // 0-indexed, so 1, 3, 5 are the "even" visual columns

  // Parallax effect: even columns scroll slightly slower, odd scroll faster
  const y = useTransform(scrollYProgress, [0, 1], [0, isEvenColumn ? -150 : -50]);

  const cardClass = isDarkCard ? "product-mockup-card-dark" : "feature-card";
  const titleClass = isDarkCard ? "text-on-dark" : "text-ink";
  const descClass = isDarkCard ? "text-on-dark-soft" : "text-muted";
  const btnClass = isDarkCard ? "btn-secondary-on-dark" : "btn-secondary";

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      style={{ y }}
      className={`${cardClass} flex flex-col gap-6 ${isEvenColumn ? 'md:mt-32' : 'md:mt-0'}`}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm border border-hairline/20 bg-surface-dark-elevated">
        {project.embedUrl ? (
          <iframe 
            src={project.embedUrl} 
            className="w-full h-full border-none"
            title={project.name}
            scrolling="no"
          />
        ) : (
          <Image 
            src={project.image} 
            alt={project.name} 
            containerClassName="w-full h-full absolute inset-0"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      <div>
        <h3 className={`text-[18px] font-medium ${titleClass} mb-2`}>{project.name}</h3>
        <p className={`text-[14px] ${descClass}`}>{project.desc}</p>
      </div>

      <div className="mt-auto pt-4">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className={btnClass}>
          Visit Website
        </a>
      </div>
    </motion.div>
  );
}

export function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="bg-canvas py-[clamp(4rem,10vw,8rem)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col mb-16 gap-6"
        >
          <div>
            <h2 className="text-display-lg text-ink mb-4">
              Featured works
            </h2>
            <p className="text-body-md text-muted max-w-lg mb-8">
              A selection of digital properties we've engineered, ranging from sophisticated corporate sites to highly-converting e-commerce storefronts.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300 ${
                    activeCategory === cat 
                      ? "bg-surface-card text-ink" 
                      : "bg-transparent text-muted hover:text-ink hover:bg-surface-card/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
