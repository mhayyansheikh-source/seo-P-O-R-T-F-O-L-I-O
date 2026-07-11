import { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { TopNav } from './components/TopNav';
import { CustomCursor } from './components/CustomCursor';

// Lazy load below-the-fold components
const SelectedWorks = lazy(() => import('./components/SelectedWorks').then(module => ({ default: module.SelectedWorks })));
const Journal = lazy(() => import('./components/Journal').then(module => ({ default: module.Journal })));
const Explorations = lazy(() => import('./components/Explorations').then(module => ({ default: module.Explorations })));
const Stats = lazy(() => import('./components/Stats').then(module => ({ default: module.Stats })));
const ContactFooter = lazy(() => import('./components/ContactFooter').then(module => ({ default: module.ContactFooter })));
const BottomNav = lazy(() => import('./components/BottomNav').then(module => ({ default: module.BottomNav })));

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
      <div className="bg-noise"></div>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <main className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <TopNav />
        <Hero />
        <Suspense fallback={<div className="h-screen bg-canvas" />}>
          <SelectedWorks />
          <Journal />
          <Explorations />
          <Stats />
          <ContactFooter />
          <BottomNav />
        </Suspense>
      </main>
    </>
  );
}

export default App;
