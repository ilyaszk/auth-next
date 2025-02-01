import CtaSection from './cta-section';
import FeaturesSection from './features-section';
import HeroSection from './hero-section';

export default function HomePage() {
  return (
    <main className='flex min-h-screen flex-col'>
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}
