import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Image } from './Image';

type Category = 'All' | 'E-Commerce & Brands' | 'Healthcare & Clinics' | 'Corporate & B2B Services' | 'Lifestyle & Hospitality';

const PROJECTS = [
  // E-Commerce & Brands
  { name: 'Herbalicious', url: 'https://herbalicious-shop.com/', category: 'E-Commerce & Brands', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80', desc: 'Premium botanical e-commerce' },
  { name: 'Italia Cosmetics', url: 'https://italiacosmetics.com/', category: 'E-Commerce & Brands', image: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=800&q=80', desc: 'Luxury beauty and cosmetics storefront' },
  { name: 'The Local Crafts', url: 'https://thelocalcrafts.com/', category: 'E-Commerce & Brands', image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80', desc: 'Handcrafted artisan goods' },
  { name: 'Ali Bags', url: 'https://ali-bags82-premium-leather-bags-in.vercel.app/', category: 'E-Commerce & Brands', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80', desc: 'Premium leather goods' },
  { name: 'Zarr Livid', url: 'https://zarr-livid.vercel.app/', category: 'E-Commerce & Brands', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80', desc: 'Modern retail experience' },
  { name: 'Peteora', url: 'https://peteora.com/', category: 'E-Commerce & Brands', image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80', desc: 'Specialized brand storefront' },
  
  // Healthcare & Clinics
  { name: 'Dr. Sehar Taskeen', url: 'https://drsehartaskeen.online/', category: 'Healthcare & Clinics', image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80', desc: 'Medical professional portfolio' },
  { name: 'Dr. Aman Jafar MD', url: 'https://dramanjafarmd-com.vercel.app/', category: 'Healthcare & Clinics', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', desc: 'Clinical practice website' },
  { name: 'Pharchiro', url: 'https://pharchiro-com.vercel.app/', category: 'Healthcare & Clinics', image: 'https://images.unsplash.com/photo-1551076805-e18690c5e561?auto=format&fit=crop&w=800&q=80', desc: 'Chiropractic and wellness services' },
  
  // Corporate & B2B Services
  { name: 'SEO Ustaad', url: 'https://seoustaad.com/', category: 'Corporate & B2B Services', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', desc: 'Leading digital agency in Pakistan' },
  { name: 'Become A Brand Owner', url: 'https://becomeabrandowner.seoustaad.com/', category: 'Corporate & B2B Services', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', desc: 'Brand building masterclass & community' },
  { name: 'Nifty PS', url: 'https://niftyps.com.au/', category: 'Corporate & B2B Services', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', desc: 'Australian property services' },
  { name: 'Native Roofing', url: 'https://native-roofing-enterprises.vercel.app/', category: 'Corporate & B2B Services', image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80', desc: 'Commercial roofing enterprise' },
  { name: 'Total Mens', url: 'https://totalmens-com.vercel.app/', category: 'Corporate & B2B Services', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', desc: 'Men\'s corporate services' },
  { name: 'Manageable Living', url: 'https://manageableliving.net/', category: 'Corporate & B2B Services', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', desc: 'Property management solutions' },
  { name: 'Manageable Services', url: 'https://manageableservices.com/', category: 'Corporate & B2B Services', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80', desc: 'B2B service provider' },
  { name: 'Kits UAE', url: 'https://kitsuae.com/', category: 'Corporate & B2B Services', image: 'https://images.unsplash.com/photo-1512406825222-22c608f06f79?auto=format&fit=crop&w=800&q=80', desc: 'UAE commercial operations' },

  // Lifestyle & Hospitality
  { name: 'ARB Farms', url: 'https://www.arbfarms.com/', category: 'Lifestyle & Hospitality', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80', desc: 'Agricultural lifestyle brand' },
  { name: 'La Pasha Lounge', url: 'https://lapashalounge.vercel.app/', category: 'Lifestyle & Hospitality', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80', desc: 'Premium dining and lounge experience' },
  { name: 'Uzma Shadi', url: 'https://uzmashadi-com.vercel.app/', category: 'Lifestyle & Hospitality', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80', desc: 'Wedding and event planning' },
  { name: 'Cap Coral', url: 'https://cap-coral.vercel.app/', category: 'Lifestyle & Hospitality', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80', desc: 'Coastal lifestyle destination' },
];

const CATEGORIES: Category[] = ['All', 'E-Commerce & Brands', 'Healthcare & Clinics', 'Corporate & B2B Services', 'Lifestyle & Hospitality'];

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
        <Image 
          src={project.image} 
          alt={project.name} 
          containerClassName="w-full h-full absolute inset-0"
          className="w-full h-full object-cover"
        />
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
