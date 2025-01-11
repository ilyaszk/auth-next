// AuthButtons.tsx
'use client';

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
} from '@clerk/nextjs';
import Link from 'next/link';

export default function AuthButtons() {
  return (
    <>
      {/* Desktop Auth Buttons */}
      <div className='@810:flex hidden h-full items-center'>
        <Link
          href='/contact'
          className='text-md hover:text-tertiary px-4 font-medium'
        >
          Contact
        </Link>
        <SignedOut>
          <SignInButton>
            <button className='text-md text-secondary group relative flex h-full items-center justify-center overflow-hidden px-4 py-2 font-medium'>
              <span className='bg-tertiary absolute inset-0 translate-y-full transform transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
              <span className='group-hover:text-primary relative z-10'>
                Sign In
              </span>
            </button>
          </SignInButton>

          <SignUpButton>
            <button className='bg-secondary text-primary text-md group relative h-full overflow-hidden px-4 py-2 font-medium'>
              <span className='bg-primary absolute inset-0 -translate-y-full transform transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
              <span className='group-hover:text-tertiary relative z-10'>
                Get Started
              </span>
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <SignOutButton>
            <button className='text-md text-secondary group relative flex h-full items-center justify-center overflow-hidden px-4 py-2 font-medium'>
              <span className='bg-tertiary absolute inset-0 translate-y-full transform transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
              <span className='group-hover:text-secondary relative z-10'>
                Sign Out
              </span>
            </button>
          </SignOutButton>

          <Link
            href='/dashboard'
            className='bg-secondary text-primary text-md group relative flex h-full items-center justify-center overflow-hidden px-4 py-2 font-medium'
          >
            <span className='bg-primary absolute inset-0 -translate-y-full transform transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
            <span className='group-hover:text-secondary relative z-10'>
              Dashboard
            </span>
          </Link>
        </SignedIn>
      </div>

      {/* Mobile Auth Buttons */}
      <div className='bg-primary border-secondary @810:hidden'>
        <SignedOut>
          <div className='flex flex-col space-y-4 p-4'>
            <SignInButton>
              <button className='text-md text-secondary hover:text-tertiary w-full text-center font-medium'>
                Sign In
              </button>
            </SignInButton>

            <SignUpButton>
              <button className='text-md text-secondary hover:text-tertiary w-full text-center font-medium'>
                Get Started
              </button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className='flex flex-col space-y-4 p-4'>
            <SignOutButton>
              <button className='text-md text-secondary hover:text-tertiary w-full text-center font-medium'>
                Sign Out
              </button>
            </SignOutButton>

            <Link
              href='/dashboard'
              className='text-md text-secondary hover:text-tertiary w-full text-center font-medium'
            >
              Dashboard
            </Link>
          </div>
        </SignedIn>
      </div>
    </>
  );
}
