import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from '@clerk/nextjs';
import Link from 'next/link';

export default function AuthButtons() {
  return (
    <>
      {/* Desktop Auth Buttons */}
      <div className='hidden items-center gap-2 md:flex'>
        <Link
          href='/contact'
          className='rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white'
        >
          Contact
        </Link>
        <SignedOut>
          <SignInButton>
            <button className='rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-all hover:bg-gray-800 hover:text-white'>
              Sign In
            </button>
          </SignInButton>

          <SignUpButton>
            <button className='rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-purple-700'>
              Get Started
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <SignOutButton>
            <button className='rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-all hover:bg-gray-800 hover:text-white'>
              Sign Out
            </button>
          </SignOutButton>

          <Link
            href='/dashboard'
            className='rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-purple-700'
          >
            Dashboard
          </Link>
        </SignedIn>
      </div>

      {/* Mobile Auth Buttons */}
      <div className='md:hidden'>
        <SignedOut>
          <div className='space-y-2 p-4'>
            <SignInButton>
              <button className='w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white'>
                Sign In
              </button>
            </SignInButton>

            <SignUpButton>
              <button className='w-full rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700'>
                Get Started
              </button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className='space-y-2 p-4'>
            <SignOutButton>
              <button className='w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white'>
                Sign Out
              </button>
            </SignOutButton>

            <Link
              href='/dashboard'
              className='block w-full rounded-lg bg-purple-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-purple-700'
            >
              Dashboard
            </Link>
          </div>
        </SignedIn>
      </div>
    </>
  );
}
