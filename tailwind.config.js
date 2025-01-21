/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans all your source files
  theme: {
    extend: {
      colors: {
        primary: '#FF5722',       // Primary color
        secondary: '#3F51B5',     // Secondary color
        background: '#1A1A2E',    // Default background color for dark mode
        textPrimary: '#FFFFFF',   // Primary text color for dark mode
        textSecondary: '#B0BEC5', // Secondary text color for dark mode
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Default font family
      },
    },
  },
  plugins: [], // Plugins section remains
};
