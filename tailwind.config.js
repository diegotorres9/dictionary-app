/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      padding: {
        'xl-x': '350px',
        'xl-t': '58px',
        'xl-b': '124px'
      }
    },
  },
  plugins: [],
}

