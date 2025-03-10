/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#646cff',
          dark: '#4a50bf',
          light: '#8a91ff',
        },
        secondary: {
          DEFAULT: '#f4f3ff',
          dark: '#242424',
        },
        accent: {
          DEFAULT: '#ffcc00', // Yellow accent
          light: '#ffe066',
        },
        dark: {
          DEFAULT: '#121212',
          light: '#1e1e1e',
          lighter: '#2d2d2d',
        },
        light: {
          DEFAULT: '#f4f3ff',
          dark: '#e0e0e0',
        }
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
} 