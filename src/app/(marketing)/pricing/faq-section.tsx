import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is included in the free plan?',
      answer:
        'The free plan includes 10 projects, basic support, and access to our community features. You can use core functionalities and collaborate with other users.',
    },
    {
      question: 'Can I cancel anytime?',
      answer:
        'Yes, you can cancel or change your plan at any time with no questions asked. We provide prorated refunds for unused time on paid plans.',
    },
    {
      question: 'Do you offer customer support?',
      answer:
        'Yes, our customer support team is available 24/7 to assist you. Premium plans include priority support with guaranteed response times.',
    },
    {
      question: 'Can I upgrade my plan?',
      answer:
        'Yes, you can upgrade your plan at any time. The new pricing will be prorated based on your current billing period. All your data and settings will be preserved.',
    },
  ];

  return (
    <section className='bg-gray-50 py-20'>
      <div className='mx-auto max-w-3xl px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold'>Frequently Asked Questions</h2>
          <p className='mt-4 text-gray-600'>
            Find answers to common questions about our service.
          </p>
        </div>

        <div className='mt-12'>
          {faqs.map((faq, index) => (
            <div key={index} className='mb-4'>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className='flex w-full items-center justify-between rounded-lg bg-white p-6 text-left shadow-sm transition-colors hover:bg-gray-50'
              >
                <span className='text-lg font-medium text-gray-900'>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className='rounded-b-lg bg-white px-6 pb-6'>
                  <p className='text-gray-600'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
