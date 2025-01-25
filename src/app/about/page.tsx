import { Code, Target, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Active Users', value: '10K+' },
    { label: 'Companies', value: '300+' },
    { label: 'Countries', value: '50+' },
    { label: 'Team Members', value: '25+' },
  ];

  const values = [
    {
      icon: <Target className='h-6 w-6 text-purple-600' />,
      title: 'Mission-Driven',
      description:
        'We re committed to empowering teams with better tools for success.',
    },
    {
      icon: <Users className='h-6 w-6 text-purple-600' />,
      title: 'Customer First',
      description:
        'Your success is our success. We re here to support you every step of the way.',
    },
    {
      icon: <Code className='h-6 w-6 text-purple-600' />,
      title: 'Innovation',
      description:
        'Constantly pushing boundaries to bring you the latest technology.',
    },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to transform team collaboration.',
    },
    {
      year: '2021',
      title: 'Series A Funding',
      description: 'Raised $10M to accelerate product development.',
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Opened offices in London and Singapore.',
    },
    {
      year: '2023',
      title: 'Enterprise Launch',
      description: 'Released enterprise-grade features and security.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className='bg-gradient-to-b from-purple-50 to-white py-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='grid gap-12 md:grid-cols-2'>
            <div>
              <h1 className='text-4xl font-bold md:text-5xl'>
                Building the future of{' '}
                <span className='bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent'>
                  collaboration
                </span>
              </h1>
              <p className='mt-6 text-lg text-gray-600'>
                We&apos;re on a mission to help teams work better together. Our
                platform provides the tools you need to succeed in today&apos;s
                fast-paced world.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {stats.map((stat, index) => (
                <div key={index} className='rounded-lg bg-white p-6 shadow-sm'>
                  <div className='text-3xl font-bold text-purple-600'>
                    {stat.value}
                  </div>
                  <div className='mt-2 text-sm text-gray-600'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <h2 className='text-center text-3xl font-bold'>Our Values</h2>
          <div className='mt-12 grid gap-8 md:grid-cols-3'>
            {values.map((value, index) => (
              <div
                key={index}
                className='rounded-lg border border-gray-100 bg-white p-6 shadow-sm'
              >
                <div className='mb-4'>{value.icon}</div>
                <h3 className='mb-2 text-xl font-semibold'>{value.title}</h3>
                <p className='text-gray-600'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className='bg-gray-50 py-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <h2 className='text-center text-3xl font-bold'>Our Journey</h2>
          <div className='mt-12'>
            <div className='relative'>
              <div className='absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-purple-200'></div>
              <div className='space-y-12'>
                {timeline.map((event, index) => (
                  <div key={index} className='relative'>
                    <div className='flex items-center'>
                      <div className='absolute left-1/2 -translate-x-1/2'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white'>
                          <div className='h-3 w-3 rounded-full bg-white'></div>
                        </div>
                      </div>
                      <div
                        className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}
                      >
                        <div className='text-sm font-semibold text-purple-600'>
                          {event.year}
                        </div>
                        <div className='mt-1 text-xl font-semibold'>
                          {event.title}
                        </div>
                        <div className='mt-2 text-gray-600'>
                          {event.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20'>
        <div className='mx-auto max-w-4xl px-4 text-center'>
          <h2 className='text-3xl font-bold'>Join us on our mission</h2>
          <p className='mt-4 text-lg text-gray-600'>
            We&apos;re always looking for talented individuals to join our team.
          </p>
          <div className='mt-8'>
            <a
              href='/careers'
              className='inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-700'
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
