import { Check, X } from 'lucide-react';

export default function CompareTableSection() {
  const pricingData = {
    headers: ['Features', 'Starter', 'Basic', 'Intermediate', 'Professional'],
    rows: [
      { feature: 'Projects', values: ['10', '50', 'Unlimited', 'Unlimited'] },
      {
        feature: 'Support',
        values: ['Basic', 'Priority', 'Dedicated', 'Dedicated'],
      },
      { feature: 'Analytics', values: [false, true, true, true] },
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
      { feature: 'Community Access', values: [true, true, true, true] },
      {
        feature: 'Access to mobile app and web platform',
        values: [true, true, true, true],
      },
      { feature: 'Advanced Analytics', values: [false, false, true, true] },
      { feature: 'Dedicated Support', values: [false, false, true, true] },
      { feature: 'Custom Solutions', values: [false, false, false, true] },
      { feature: '24/7 Support', values: [false, false, false, true] },
    ],
  };

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className='mx-auto h-5 w-5 text-green-500' />
      ) : (
        <X className='mx-auto h-5 w-5 text-red-500' />
      );
    }
    return value;
  };

  return (
    <section className='mx-auto max-w-6xl px-4 py-20'>
      <h2 className='text-center text-3xl font-bold'>Compare Our Plans</h2>
      <div className='mt-12 overflow-x-auto'>
        <table className='w-full border-separate border-spacing-0 rounded-lg'>
          <thead>
            <tr>
              {pricingData.headers.map((header, index) => (
                <th
                  key={index}
                  className={`sticky top-0 bg-gray-900 p-4 text-left text-sm font-medium text-white ${index === 0 ? 'rounded-tl-lg' : ''} ${index === pricingData.headers.length - 1 ? 'rounded-tr-lg' : ''} `}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingData.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className='border-b border-gray-200 bg-white p-4 font-medium'>
                  {row.feature}
                </td>
                {row.values.map((value, valueIndex) => (
                  <td
                    key={valueIndex}
                    className='border-b border-gray-200 bg-white p-4 text-center'
                  >
                    {renderValue(value)}
                  </td>
                ))}
              </tr>
            ))}

            <tr>
              <td
                colSpan={pricingData.headers.length}
                className='bg-gray-900 p-4 text-left text-sm font-medium text-white'
              >
                Benefits
              </td>
            </tr>

            {pricingData.benefits.map((benefit, benefitIndex) => (
              <tr key={benefitIndex}>
                <td className='border-b border-gray-200 bg-white p-4 font-medium'>
                  {benefit.feature}
                </td>
                {benefit.values.map((value, valueIndex) => (
                  <td
                    key={valueIndex}
                    className='border-b border-gray-200 bg-white p-4 text-center'
                  >
                    {renderValue(value)}
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
