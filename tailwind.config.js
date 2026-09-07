/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#060709',
          900: '#0B0D13',
          800: '#131722',
          700: '#1D2333',
          600: '#2C354C',
        },
        cyber: {
          cyan: '#00F0FF',
          amber: '#FFB800',
          emerald: '#10B981',
          rose: '#F43F5E',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
