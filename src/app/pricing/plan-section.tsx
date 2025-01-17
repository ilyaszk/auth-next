import { useState } from 'react';

export default function PlanSection() {
  const [activePlan, setActivePlan] = useState<number | null>(2);
  const [monthly, setMonthly] = useState<boolean>(true);

  const pricingData: Array<{
    id: number;
    title: string;
    priceMonth: string;
    priceYear: string;
    description: string;
    features: string[];
    buttonText: string;
  }> = [
    {
      id: 1,
      title: 'Starter',
      priceMonth: 'Free',
      priceYear: 'Free',
      description: 'Perfect for individuals.',
      features: ['10 Projects', 'Basic Support', 'Community Access'],
      buttonText: 'Get Started',
    },
    {
      id: 2,
      title: 'Basic',
      priceMonth: '$8/month',
      priceYear: '$80/year (Save $16)',
      description: 'For beginners.',
      features: ['50 Projects', 'Priority Support', 'Team Collaboration'],
      buttonText: 'Get Basic',
    },
    {
      id: 3,
      title: 'Intermediate',
      priceMonth: '$25/month',
      priceYear: '$250/year (Save $50)',
      description: 'Perfect for small teams.',
      features: [
        'Unlimited Projects',
        'Advanced Analytics',
        'Dedicated Support',
      ],
      buttonText: 'Get Intermediate',
    },
    {
      id: 4,
      title: 'Professional',
      priceMonth: '$50/month',
      priceYear: '$500/year (Save $100)',
      description: 'Advanced tools for experts.',
      features: ['Unlimited Access', 'Custom Solutions', '24/7 Support'],
      buttonText: 'Get Professional',
    },
  ];

  return (
    <>
      <section className='py-10 text-center'>
        <h1 className='text-5xl font-bold'>Pricing</h1>
        <p className='mt-4 text-lg text-gray-600'>
          Build an Index for your team or company. Upgrade anytime.
        </p>
        {/* button group */}
        <div className='mt-8 flex justify-center text-lg'>
          <button
            className={`rounded-l-md px-4 py-2 ${
              monthly ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            }`}
            onClick={() => setMonthly(true)}
          >
            Monthly
          </button>
          <button
            className={`rounded-r-md px-4 py-2 ${
              !monthly ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            }`}
            onClick={() => setMonthly(false)}
          >
            Yearly (Save 20%) 🎉
          </button>
        </div>
      </section>

      <section className='mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4'>
        {pricingData.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-lg p-6 text-center shadow-md ${
              activePlan === plan.id
                ? 'border-2 border-gray-900 bg-gray-100'
                : 'bg-white'
            }`}
            onClick={() => setActivePlan(plan.id)}
          >
            <h2 className='text-2xl font-semibold'>{plan.title}</h2>
            <div className='mt-4 text-lg'>
              {monthly ? (
                <p> {plan.priceMonth}</p>
              ) : (
                <div>
                  <p className='text-red-400 line-through'>{plan.priceMonth}</p>
                  <p> {plan.priceYear}</p>
                </div>
              )}
            </div>
            <p className='mt-2 text-sm text-gray-500'>{plan.description}</p>
            <ul className='mt-6 space-y-4 text-left text-gray-700'>
              {plan.features.map((feature, index) => (
                <li key={index}>✔️ {feature}</li>
              ))}
            </ul>
            <button className='mt-6 rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-700'>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </section>
    </>
  );
}
