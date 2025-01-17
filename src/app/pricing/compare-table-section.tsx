export default function CompareTablSection() {
  const pricingData = {
    headers: ['Features', 'Starter', 'Basic', 'Intermediate', 'Professional'],
    rows: [
      { feature: 'Projects', values: ['10', '50', 'Unlimited', 'Unlimited'] },
      {
        feature: 'Support',
        values: ['Basic', 'Priority', 'Dedicated', 'Dedicated'],
      },
      { feature: 'Analytics', values: ['❌', '✔️', '✔️', '✔️'] },
      {
        feature: 'Collaboration',
        values: ['Community', 'Community', 'Team', 'Team'],
      },
      {
        feature: 'Price',
        values: ['Free', '$8/month', '$25/month', '$50/month'],
      },
    ],
    benefits: [
      { feature: 'Community Access', values: ['✔️', '✔️', '✔️', '✔️'] },
      {
        feature: 'Access to mobile app and web platform',
        values: ['✔️', '✔️', '✔️', '✔️'],
      },
      { feature: 'Advanced Analytics', values: ['❌', '❌', '✔️', '✔️'] },
      { feature: 'Dedicated Support', values: ['❌', '❌', '✔️', '✔️'] },
      { feature: 'Custom Solutions', values: ['❌', '❌', '❌', '✔️'] },
      { feature: '24/7 Support', values: ['❌', '❌', '❌', '✔️'] },
    ],
  };
  return (
    <section className='mx-auto max-w-6xl px-4 py-10'>
      <h2 className='text-center text-3xl font-bold'>Compare Our Plans</h2>
      <div className='mt-8 overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              {pricingData.headers.map((header, index) => (
                <th key={index} className='p-4 text-center'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Regular rows */}
            {pricingData.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className='border p-4'>{row.feature}</td>
                {row.values.map((value, valueIndex) => (
                  <td key={valueIndex} className='p-4 text-center'>
                    {value}
                  </td>
                ))}
              </tr>
            ))}

            {/* Separator for benefits */}
            <tr className='bg-gray-100'>
              <th
                className='p-4 text-left'
                colSpan={pricingData.headers.length}
              >
                Benefits
              </th>
            </tr>

            {/* Benefits rows */}
            {pricingData.benefits.map((benefit, benefitIndex) => (
              <tr key={benefitIndex}>
                <td className='border p-4'>{benefit.feature}</td>
                {benefit.values.map((value, valueIndex) => (
                  <td key={valueIndex} className='p-4 text-center'>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
