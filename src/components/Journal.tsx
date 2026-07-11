import { motion } from 'framer-motion';

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
  return (
    <section id="services" className="bg-canvas py-[96px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="feature-card flex flex-col gap-6 group hover:bg-surface-dark-elevated transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-hairline flex items-center justify-center text-2xl group-hover:bg-surface-dark transition-colors">
                {service.icon}
              </div>
              
              <div>
                <h3 className="text-title-lg font-display text-ink group-hover:text-on-dark mb-4 transition-colors">
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
