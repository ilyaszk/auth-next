import { Check } from 'lucide-react';
import { useState } from 'react';

export default function PlanSection() {
  const [monthly, setMonthly] = useState(true);

  const pricingData = [
    {
      id: 1,
      title: 'Starter',
      priceMonth: 'Free',
      priceYear: 'Free',
      description: 'Perfect for individuals.',
      features: ['10 Projects', 'Basic Support', 'Community Access'],
      buttonText: 'Get Started',
      highlight: false,
    },
    {
      id: 2,
      title: 'Basic',
      priceMonth: '$8/month',
      priceYear: '$80/year (Save $16)',
      description: 'For growing teams.',
      features: ['50 Projects', 'Priority Support', 'Team Collaboration'],
      buttonText: 'Get Basic',
      highlight: true,
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
      highlight: false,
    },
    {
      id: 4,
      title: 'Professional',
      priceMonth: '$50/month',
      priceYear: '$500/year (Save $100)',
      description: 'Advanced tools for experts.',
      features: ['Unlimited Access', 'Custom Solutions', '24/7 Support'],
      buttonText: 'Get Professional',
      highlight: false,
    },
  ];

  return (
    <>
      <section className='bg-gradient-to-b from-gray-900 to-purple-900 py-20 text-white'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='text-center'>
            <h1 className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-5xl font-bold text-transparent'>
              Simple, transparent pricing
            </h1>
            <p className='mt-4 text-lg text-gray-300'>
              Choose the perfect plan for your needs. Switch at any time.
            </p>
          </div>

          {/* Toggle Button */}
          <div className='mt-12 flex justify-center'>
            <div className='inline-flex rounded-lg bg-gray-800 p-1'>
              <button
                className={`rounded-md px-6 py-2 text-sm font-medium transition-colors ${
                  monthly
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={`rounded-md px-6 py-2 text-sm font-medium transition-colors ${
                  !monthly
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setMonthly(false)}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='relative -mt-10'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {pricingData.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl bg-gray-900 p-8 shadow-lg transition-transform hover:scale-105 ${
                  plan.highlight ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {plan.highlight && (
                  <div className='absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-1 text-sm font-medium text-white'>
                    Popular Choice
                  </div>
                )}

                <div>
                  <h3 className='text-xl font-bold text-white'>{plan.title}</h3>
                  <p className='mt-2 text-sm text-gray-400'>
                    {plan.description}
                  </p>
                  <div className='mt-4'>
                    {monthly ? (
                      <div className='text-2xl font-bold text-white'>
                        {plan.priceMonth}
                      </div>
                    ) : (
                      <div>
                        <div className='text-lg text-gray-500 line-through'>
                          {plan.priceMonth}
                        </div>
                        <div className='text-2xl font-bold text-white'>
                          {plan.priceYear}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <ul className='mt-8 space-y-4'>
                  {plan.features.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                      <Check className='mr-3 h-5 w-5 text-green-500' />
                      <span className='text-gray-300'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    plan.highlight
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
