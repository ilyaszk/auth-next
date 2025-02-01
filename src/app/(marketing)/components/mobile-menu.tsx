// MobileMenu.tsx
'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import AuthButtons from './auth-buttons';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/product', label: 'Product' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className='md:hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white'
        aria-label='Menu'
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <>
          {/* Menu */}
          <div className='absolute inset-x-0 top-16 z-50 m-2 rounded-lg bg-gray-900 p-4 shadow-lg ring-1 ring-gray-800'>
            <nav className='space-y-2'>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className='pt-4'>
                <AuthButtons />
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
