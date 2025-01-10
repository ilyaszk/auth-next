import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link'; // Import du composant Link

export default function Navbar() {
  return (
    <nav className='bg-gray-800 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo Section */}
          <div className='flex-shrink-0'>
            <Link href='/' className='text-2xl font-bold hover:text-gray-300'>
              Auth Next.js by IZK
            </Link>
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex space-x-4'>
            <Link
              href='/'
              className='px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700'
            >
              Home
            </Link>
            <Link
              href='/dashboard'
              className='px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700'
            >
              Dashboard
            </Link>
            <Link
              href='/profile'
              className='px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700'
            >
              Profile
            </Link>
          </div>

          {/* Authentication Buttons */}
          <div className='flex items-center space-x-4'>
            <SignedOut>
              <SignInButton>
                <button className='bg-blue-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600'>
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <SignOutButton>
                <button className='bg-red-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600'>
                  Sign Out
                </button>
              </SignOutButton>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
