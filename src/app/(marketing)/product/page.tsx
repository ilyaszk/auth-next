import CtaSection from './cta-section-product';
import FeaturesSection from './features-section-product';
import HeroSection from './hero-section-product';
import IntegrationsSection from './integrations-section-product';
import UseCasesSection from './use-cases-section-product';

export default function Product() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <IntegrationsSection />
      <CtaSection />
    </main>
  );
}
