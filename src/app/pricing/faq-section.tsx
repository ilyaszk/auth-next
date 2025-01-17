export default function FaqSection() {
  const data: { question: string; answer: string }[] = [
    {
      question: 'What is included in the free plan?',
      answer: 'The free plan includes 10 projects and basic support.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel or change your plan at any time.',
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes, our customer support team is available 24/7 to assist you.',
    },
    {
      question: 'Can I upgrade my plan?',
      answer:
        'Yes, you can upgrade your plan at any time, and we will adjust the billing accordingly.',
    },
  ];
  return (
    <section className='py-10'>
      <div className='mx-auto max-w-6xl px-4 text-center'>
        <h2 className='text-3xl font-bold text-gray-900'>
          Frequently Asked Questions
        </h2>
        <div className='mt-8 space-y-6 text-left'>
          {data.map((faq, index) => (
            <details key={index} className='group'>
              <summary className='cursor-pointer text-xl font-semibold text-gray-900 group-hover:text-purple-700'>
                {faq.question}
              </summary>
              <p className='ml-4 mt-2 text-gray-600'>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
