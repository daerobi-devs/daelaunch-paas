/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        forest: {
          50: '#F2F7F4',
          100: '#E2EFE7',
          200: '#C4DEC0',
          300: '#97C49F',
          400: '#529E63',
          500: '#2D7D41',
          600: '#226333',
          700: '#1C4F2B',
          800: '#153D22',
          900: '#0F2C18',
          950: '#08190E',
        },
        paper: {
          50: '#FFFFFF',
          100: '#F9FBF9',
          200: '#F1F5F2',
          300: '#E4ECE6',
          400: '#CBD8CF',
        },
        moss: {
          DEFAULT: '#1E3F20',
          dark: '#132A13',
          accent: '#31572C',
          light: '#4F772D',
          pale: '#ECF39E',
        }
      },
    },
  },
  plugins: [],
};
