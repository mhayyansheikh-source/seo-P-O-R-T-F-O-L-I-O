import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { Journal } from './components/Journal';
import { Explorations } from './components/Explorations';
import { Stats } from './components/Stats';
import { ContactFooter } from './components/ContactFooter';

import { TopNav } from './components/TopNav';
import { BottomNav } from './components/BottomNav';

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('hasVisited');
  });

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      window.scrollTo(0, 0);
      if (!sessionStorage.getItem('hasVisited')) {
        sessionStorage.setItem('hasVisited', 'true');
      }
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <main className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <TopNav />
        <Hero />
        <SelectedWorks />
        <Journal />
        <Explorations />
        <Stats />
        <ContactFooter />
        <BottomNav />
      </main>
    </>
  );
}

export default App;
