import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={`flex min-h-screen ${montserrat.className} bg-white`}>
      {/* Left Side - Brand/Marketing */}
      <div className='relative hidden w-1/2 bg-gradient-to-br from-gray-900 to-purple-900 lg:block'>
        <div className='relative z-10 flex h-full flex-col justify-between p-12'>
          <div>
            <Link className='text-xl font-bold text-white' href='/'>
              Your SaaS Company
            </Link>
          </div>
          <div className='max-w-lg'>
            <h1 className='text-4xl font-bold text-white'>
              Rejoignez une communauté innovante
            </h1>
            <p className='mt-4 text-lg text-purple-100'>
              Une plateforme unique pour transformer votre façon de travailler.
            </p>
            <div className='mt-8 grid grid-cols-2 gap-4'>
              <div className='rounded-lg bg-white/10 p-4 backdrop-blur-sm'>
                <div className='text-2xl font-bold text-white'>10k+</div>
                <div className='text-sm text-purple-200'>
                  Clients satisfaits
                </div>
              </div>
              <div className='rounded-lg bg-white/10 p-4 backdrop-blur-sm'>
                <div className='text-2xl font-bold text-white'>24/7</div>
                <div className='text-sm text-purple-200'>Support client</div>
              </div>
            </div>
          </div>
          <div className='text-sm text-purple-200'>
            © 2025 Your SaaS Company. Tous droits réservés.
          </div>
        </div>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className='absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-900'></div>
      </div>

      {/* Right Side - Auth Form */}
      <main className='flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:px-20 xl:px-24'>
        {children}
      </main>
    </body>
  );
}
