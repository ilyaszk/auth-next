import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
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
                <div className='text-sm text-gray-300'>Team activity live</div>
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
  );
}
