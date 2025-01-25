import { Webhook } from 'lucide-react';
import Link from 'next/link';
import AuthButtons from './auth-buttons';
import MobileMenu from './mobile-menu';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 backdrop-blur-lg'>
      <div className='border-b border-gray-800 bg-gray-900/90'>
        <div className='mx-auto max-w-6xl'>
          <div className='flex h-16 items-center justify-between px-4'>
            {/* Logo Section */}
            <div className='flex items-center gap-2'>
              <Link
                href='/'
                className='flex items-center gap-2 text-xl font-bold text-white hover:text-purple-400'
              >
                <Webhook className='h-8 w-8 text-purple-500' />
                <span className='hidden sm:inline-block'>
                  Software as a Service
                </span>
                <span className='sm:hidden'>SaaS</span>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden'>
              <MobileMenu />
            </div>

            {/* Desktop Navigation Links */}
            <div className='hidden md:flex md:items-center md:gap-1'>
              <Link
                href='/product'
                className='group relative rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:text-white'
              >
                Product
                <span className='absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-purple-500/0 via-purple-500/70 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-100' />
              </Link>
              <Link
                href='/pricing'
                className='group relative rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:text-white'
              >
                Pricing
                <span className='absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-purple-500/0 via-purple-500/70 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-100' />
              </Link>
              <Link
                href='/about'
                className='group relative rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:text-white'
              >
                About Us
                <span className='absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-purple-500/0 via-purple-500/70 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-100' />
              </Link>
            </div>

            {/* Auth Buttons Component */}
            <div className='hidden md:block'>
              <AuthButtons />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
