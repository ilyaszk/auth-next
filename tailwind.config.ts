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
        primary: '#FFFAF8',
        secondary: '#0D0D0D',
        tertiary: '#FFB7B1',
      },
      screens: {
        '@810': '810px',
        // ...autres breakpoints si nécessaire
      },
    },
  },
  plugins: [],
} satisfies Config;
