import React from 'react';

const IMAGES = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", // Data/Charts
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", // Analytics
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000", // Growth Chart
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", // Data/Charts 2
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", // Analytics 2
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000", // Growth Chart 2
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", // Data/Charts 3
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", // Analytics 3
];

export function InfiniteMarquee() {
  // We duplicate the array to ensure smooth infinite scrolling
  const scrollItems = [...IMAGES, ...IMAGES];

  return (
    <section className="w-full mt-16 md:mt-20 mb-16 overflow-hidden">
      <div className="flex flex-row w-max animate-marquee">
        {scrollItems.map((url, index) => (
          <div 
            key={index} 
            className="h-[280px] md:h-[500px] w-[200px] md:w-[350px] mx-3 rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
          >
            <img 
              src={url} 
              alt={`Growth metric ${index}`} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
