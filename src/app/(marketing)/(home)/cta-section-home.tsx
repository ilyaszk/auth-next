import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className='bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-24 text-white'>
      <div className='mx-auto max-w-6xl px-4'>
        <div className='grid gap-8 md:grid-cols-2'>
          <div className='text-left'>
            <h2 className='mb-4 text-4xl font-bold'>
              Start building your next big idea
            </h2>
            <p className='mb-6 text-lg text-gray-300'>
              Whether you&apos;re a startup or enterprise, we have the tools you
              need to succeed.
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
  );
}
