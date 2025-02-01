import CtaSection from './cta-section-home';
import FeaturesSection from './features-section-home';
import HeroSection from './hero-section-home';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}
