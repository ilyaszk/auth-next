// Navbar.tsx
import Link from 'next/link';
import AuthButtons from './auth-buttons';
import MobileMenu from './mobile-menu';
import { Webhook } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className='bg-primary text-secondary border-secondary border-b'>
      <div>
        <div className='flex h-20 items-center justify-between'>
          {/* Logo Section */}
          <div className='flex items-center space-x-4 px-4 md:px-6 lg:px-8'>
            <Link
              href='/'
              className='hover:text-tertiary flex items-center gap-2 text-2xl font-bold'
            >
              <Webhook width={36} height={36} /> Software as a Service
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />

          {/* Desktop Navigation Links */}
          <div className='@810:flex hidden items-center'>
            <Link
              href='/product'
              className='text-md hover:text-tertiary px-4 font-medium'
            >
              Product
            </Link>
            <Link
              href='/pricing'
              className='text-md hover:text-tertiary px-4 font-medium'
            >
              Pricing
            </Link>
            <Link
              href='/about'
              className='text-md hover:text-tertiary px-4 font-medium'
            >
              About Us
            </Link>
          </div>

          {/* Auth Buttons Component */}
          <div className='@810:block hidden h-full'>
            <AuthButtons />
          </div>
        </div>
      </div>
    </nav>
  );
}
