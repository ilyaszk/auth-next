'use client'; // Cela force l'exécution côté client uniquement pour ce composant

import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>{children}</html>
    </ClerkProvider>
  );
}
