/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'main': '#6930c3',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif' : ['Young Serif', 'serif']
      },
    },
  },
  plugins: [],
}