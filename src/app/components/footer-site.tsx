import { Webhook } from 'lucide-react';
import Link from 'next/link';

export default function FooterSite() {
  return (
    <footer className='border-t bg-gray-50'>
      <div className='mx-auto max-w-6xl px-4 py-12'>
        <div className='flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0'>
          <div className='flex items-center space-x-4'>
            <Webhook className='h-8 w-8 text-purple-600' />
            <span className='text-xl font-semibold'>SaaS Company</span>
          </div>

          <nav className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
            <Link
              href='/product'
              className='text-sm text-gray-600 hover:text-gray-900'
            >
              Product
            </Link>
            <Link
              href='/pricing'
              className='text-sm text-gray-600 hover:text-gray-900'
            >
              Pricing
            </Link>
            <Link
              href='/about'
              className='text-sm text-gray-600 hover:text-gray-900'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='text-sm text-gray-600 hover:text-gray-900'
            >
              Contact
            </Link>
            <Link
              href='/terms'
              className='text-sm text-gray-600 hover:text-gray-900'
            >
              Terms
            </Link>
            <Link
              href='/privacy'
              className='text-sm text-gray-600 hover:text-gray-900'
            >
              Privacy
            </Link>
          </nav>

          <div className='text-sm text-gray-500'>
            © 2025 SaaS Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
