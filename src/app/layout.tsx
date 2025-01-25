'use client'; // Cela force l'exécution côté client uniquement pour ce composant

import Navbar from '@/app/components/navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation'; // Utilisez cette méthode pour obtenir le chemin actuel
import React from 'react';
import FooterSite from './components/footer-site';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Obtenez la route actuelle

  const isAuthPage =
    pathname.includes('/sign-in') || pathname.includes('/sign-up');

  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`antialiased ${montserrat.className}`}>
          {!isAuthPage && <Navbar />}
          {children}
          {!isAuthPage && <FooterSite />}
        </body>
      </html>
    </ClerkProvider>
  );
}
