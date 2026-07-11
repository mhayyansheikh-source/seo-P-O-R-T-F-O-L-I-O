import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { Journal } from './components/Journal';
import { Explorations } from './components/Explorations';
import { Stats } from './components/Stats';
import { ContactFooter } from './components/ContactFooter';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Quick scroll to top on load
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <main className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <SelectedWorks />
        <Journal />
        <Explorations />
        <Stats />
        <ContactFooter />
      </main>
    </>
  );
}

export default App;
