export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { 
    label: 'Top Locations', 
    href: '#',
    children: [
      { label: 'Karachi', href: '/website-development-in-karachi' },
      { label: 'Lahore', href: '/website-development-in-lahore' },
      { label: 'Islamabad', href: '/website-development-in-islamabad' },
      { label: 'Faisalabad', href: '/website-development-in-faisalabad' },
      { label: 'Peshawar', href: '/website-development-in-peshawar' },
      { label: 'View all locations →', href: '/locations' }
    ]
  },
  { 
    label: 'Specialties', 
    href: '#',
    children: [
      { label: 'Ecommerce Development', href: '/ecommerce-website-development-in-karachi' },
      { label: 'Custom Web Dev', href: '/custom-website-development-in-lahore' },
      { label: 'Front End Services', href: '/front-end-website-development-in-islamabad' },
      { label: 'Web Dev Agency', href: '/website-development-agency-in-karachi' },
      { label: 'View all specialties →', href: '/services' }
    ]
  }
];

export const heroContent = {
  title: 'Dominate Digital Search\\nWith SEO Ustaad.',
  description: "Premium Web Development / Mobile App Development,   ROI-Driven SEO, and Meta Ads specialized for the Pakistani market. We don't just build sites; we build search authority.",
  primaryAction: { label: 'Explore Services', href: '#services' },
  secondaryAction: { label: 'Featured works', href: '#work' }
};

export const globalConstants = {
  whatsappUrl: 'https://wa.me/923379912300',
  brandName: 'SEO Ustaad'
};
