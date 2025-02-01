'use client';
import CompareTableSection from './compare-table-section';
import FaqSection from './faq-section';
import PlanSection from './plan-section';

export default function Pricing() {
  return (
    <main>
      <PlanSection />
      <CompareTableSection />
      <FaqSection />
    </main>
  );
}
