import {
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

export default function FeaturesSection() {
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
    <>
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
    </>
  );
}
