import { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { TopNav } from './components/TopNav';
import { CustomCursor } from './components/CustomCursor';

// Lazy load below-the-fold components
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./pages/TermsOfService').then(module => ({ default: module.TermsOfService })));
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
        <Suspense fallback={<div className="h-screen bg-canvas" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
          <ContactFooter />
          <BottomNav />
        </Suspense>
      </main>
    </>
  );
}

export default App;
