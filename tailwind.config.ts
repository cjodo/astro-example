/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color (Light Blue)
        primary: {
          DEFAULT: '#00b0d8',
          dark: '#008bb0',
          light: '#66d1eb',
        },
        // Dark accent / background (Dark Blue)
        secondary: {
          DEFAULT: '#2f3b42',
          dark: '#1c262b',
          light: '#56616c',
        },
        // Orange for alerts / accents / buttons
        accent: {
          900: '#f24900',
          700: '#ffc863',
          300: '#f2e9e6',
        },
        // Gold for highlights or CTAs
        highlight: {
          DEFAULT: '#ffa600',
          dark: '#cc8400',
          light: '#ffbc33',
        },
      },
    },
  },
  plugins: [],
};

