import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Showcase from '@/components/Showcase';
import UseCases from '@/components/UseCases';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import type { Route } from '@/App';

export default function HomePage({ onNavigate }: { onNavigate: (r: Route) => void }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Features onNavigate={onNavigate} />
      <Showcase onNavigate={onNavigate} />
      <UseCases onNavigate={onNavigate} />
      <Stats />
      <CTA onNavigate={onNavigate} />
    </>
  );
}
