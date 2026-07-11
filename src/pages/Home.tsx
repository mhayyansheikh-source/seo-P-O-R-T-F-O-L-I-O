import { Suspense, lazy } from 'react';
import { Hero } from '../components/Hero';

// Lazy load below-the-fold components
const SelectedWorks = lazy(() => import('../components/SelectedWorks').then(module => ({ default: module.SelectedWorks })));
const Journal = lazy(() => import('../components/Journal').then(module => ({ default: module.Journal })));
const Explorations = lazy(() => import('../components/Explorations').then(module => ({ default: module.Explorations })));
const Stats = lazy(() => import('../components/Stats').then(module => ({ default: module.Stats })));

export function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-screen bg-canvas" />}>
        <SelectedWorks />
        <Journal />
        <Explorations />
        <Stats />
      </Suspense>
    </>
  );
}
