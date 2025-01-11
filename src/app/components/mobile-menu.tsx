// MobileMenu.tsx
'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import AuthButtons from './auth-buttons';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='@810:hidden'>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-secondary p-2 hover:text-gray-300'
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className='bg-primary border-secondary absolute left-0 right-0 top-20 border-b'>
          <div className='flex flex-col space-y-4 p-4'>
            <Link
              href='/product'
              className='text-md hover:text-tertiary font-medium'
              onClick={() => setIsOpen(false)}
            >
              Product
            </Link>
            <Link
              href='/pricing'
              className='text-md hover:text-tertiary font-medium'
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href='/about'
              className='text-md hover:text-tertiary font-medium'
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href='/contact'
              className='text-md hover:text-tertiary font-medium'
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <AuthButtons />
          </div>
        </div>
      )}
    </div>
  );
}
