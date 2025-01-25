import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  GitBranch,
  LineChart,
  Lock,
  Shield,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const features = [
    {
      icon: <Zap className='h-6 w-6' />,
      title: 'Boost Productivity',
      description:
        'Automate repetitive tasks and streamline your workflow with powerful integrations.',
    },
    {
      icon: <Users className='h-6 w-6' />,
      title: 'Team Collaboration',
      description:
        'Work together seamlessly with real-time updates and advanced sharing capabilities.',
    },
    {
      icon: <Shield className='h-6 w-6' />,
      title: 'Enterprise Security',
      description:
        'Keep your data safe with industry-leading security and compliance standards.',
    },
  ];

  const techFeatures = [
    {
      icon: <Database className='h-8 w-8' />,
      title: 'Data Management',
      description:
        'Organize and access your data efficiently with advanced search and filtering.',
    },
    {
      icon: <Code className='h-8 w-8' />,
      title: 'API Integration',
      description: 'Connect with your favorite tools through our robust API.',
    },
    {
      icon: <Lock className='h-8 w-8' />,
      title: 'Access Control',
      description: 'Granular permissions and role-based access management.',
    },
    {
      icon: <Workflow className='h-8 w-8' />,
      title: 'Custom Workflows',
      description: 'Create automated processes that match your business needs.',
    },
    {
      icon: <GitBranch className='h-8 w-8' />,
      title: 'Version Control',
      description: 'Track changes and maintain full history of your work.',
    },
    {
      icon: <LineChart className='h-8 w-8' />,
      title: 'Analytics',
      description: 'Gain insights with comprehensive reporting and metrics.',
    },
  ];

  return (
    <main className='flex min-h-screen flex-col'>
      {/* Hero Section */}
      <section className='bg-gradient-to-b from-gray-900 to-purple-900 text-white'>
        <div className='mx-auto max-w-6xl px-4 py-24'>
          <div className='grid items-center gap-12 md:grid-cols-2'>
            <div className='text-left'>
              <div className='mb-4 inline-block rounded-full bg-purple-800 px-4 py-1 text-sm'>
                Transform Your Workflow
              </div>
              <h1 className='mb-6 text-4xl font-bold leading-tight md:text-6xl'>
                Work smarter with{' '}
                <span className='bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent'>
                  intelligent tools
                </span>
              </h1>
              <p className='mb-8 text-lg text-gray-300 md:text-xl'>
                Streamline your workflow, enhance team collaboration, and make
                data-driven decisions with our comprehensive platform.
              </p>
              <div className='flex flex-col gap-4 sm:flex-row'>
                <Link
                  href='/pricing'
                  className='flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700'
                >
                  Get Started <ArrowRight className='h-5 w-5' />
                </Link>
                <Link
                  href='/contact'
                  className='flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-medium text-white hover:border-purple-500 hover:bg-purple-950'
                >
                  Contact Sales
                </Link>
              </div>
              <div className='mt-8 flex items-center gap-8 text-gray-400'>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='h-5 w-5 text-green-500' />
                  <span>Free Trial</span>
                </div>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='h-5 w-5 text-green-500' />
                  <span>No Credit Card</span>
                </div>
              </div>
            </div>
            <div className='hidden rounded-lg border border-gray-800 bg-gray-900 p-6 md:block'>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='h-2 w-2 rounded-full bg-green-500'></div>
                  <div className='text-sm text-gray-300'>
                    Team activity live
                  </div>
                </div>
                <div className='space-y-2'>
                  <div className='rounded bg-gray-800 p-3 text-sm text-gray-300'>
                    🎯 Project milestone achieved
                  </div>
                  <div className='rounded bg-gray-800 p-3 text-sm text-gray-300'>
                    📊 Analytics report generated
                  </div>
                  <div className='rounded bg-gray-800 p-3 text-sm text-gray-300'>
                    ✨ New feature implemented
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      <section className='py-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <h2 className='mb-12 text-center text-3xl font-bold'>
            Why choose us?
          </h2>
          <div className='grid gap-8 md:grid-cols-3'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='rounded-lg border p-6 hover:shadow-lg'
              >
                <div className='mb-4 text-purple-600'>{feature.icon}</div>
                <h3 className='mb-2 text-xl font-semibold'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-gray-50 py-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <h2 className='mb-12 text-center text-3xl font-bold'>
            Everything you need to succeed
          </h2>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className='flex gap-4 rounded-lg bg-white p-6 shadow-sm'
              >
                <div className='text-purple-600'>{feature.icon}</div>
                <div>
                  <h3 className='mb-2 font-semibold'>{feature.title}</h3>
                  <p className='text-sm text-gray-600'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='mx-auto max-w-6xl px-4 text-center'>
          <h2 className='mb-8 text-3xl font-bold'>
            Trusted by teams worldwide
          </h2>
          <div className='flex flex-wrap items-center justify-center gap-8'>
            <div className='flex items-center gap-2'>
              <CheckCircle className='h-5 w-5 text-green-500' />
              <span className='text-lg'>50k+ Active Users</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle className='h-5 w-5 text-green-500' />
              <span className='text-lg'>99.9% Uptime</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle className='h-5 w-5 text-green-500' />
              <span className='text-lg'>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-24 text-white'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='text-left'>
              <h2 className='mb-4 text-4xl font-bold'>
                Start building your next big idea
              </h2>
              <p className='mb-6 text-lg text-gray-300'>
                Whether you&apos;re a startup or enterprise, we have the tools
                you need to succeed.
              </p>
              <Link
                href='/pricing'
                className='inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-700'
              >
                View Pricing <ArrowRight className='h-5 w-5' />
              </Link>
            </div>
            <div className='flex flex-col justify-center gap-4'>
              <div className='flex items-center gap-4 rounded-lg bg-gray-800 bg-opacity-50 p-4'>
                <CheckCircle className='h-8 w-8 text-green-500' />
                <div>
                  <h3 className='font-medium'>Free trial period</h3>
                  <p className='text-sm text-gray-400'>
                    Test all features for 14 days
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4 rounded-lg bg-gray-800 bg-opacity-50 p-4'>
                <CheckCircle className='h-8 w-8 text-green-500' />
                <div>
                  <h3 className='font-medium'>No credit card required</h3>
                  <p className='text-sm text-gray-400'>Get started instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
