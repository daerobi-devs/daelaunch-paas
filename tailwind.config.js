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
        paper: {
          50: '#FFFFFF',
          100: '#FAF9F5',
          200: '#F4F1EA',
          300: '#E8E4DA',
          400: '#D5D0C3',
          500: '#B0AA9B',
          600: '#7B7567',
          700: '#4A463D',
          800: '#2A2722',
          900: '#141311',
        },
        ink: {
          DEFAULT: '#18181B',
          muted: '#52525B',
          subtle: '#71717A',
          border: '#E4E4E7',
          light: '#F4F4F5',
        }
      },
    },
  },
  plugins: [],
};
