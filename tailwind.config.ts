import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3f4f6',
        secondary: '#0D0D0D',
        tertiary: '#a19f9f',
        background: '#F9F9F9',
      },
      screens: {
        '@810': '810px',
        // ...autres breakpoints si nécessaire
      },
    },
  },
  plugins: [],
} satisfies Config;
