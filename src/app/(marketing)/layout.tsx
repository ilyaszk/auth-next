'use client'; // Cela force l'exécution côté client uniquement pour ce composant

import Navbar from '@/app/(marketing)/components/navbar';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation'; // Utilisez cette méthode pour obtenir le chemin actuel
import React from 'react';
import FooterSite from './components/footer-site';

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
    <body className={`antialiased ${montserrat.className}`}>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <FooterSite />}
    </body>
  );
}
