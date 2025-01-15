/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: 'selector',
  theme: {
    fontSize: {
      base: '32px',
      lg: '64px'
    },
    fontFamily: {
      'sans': ['Inter', 'system-ui', 'ui-sans-serif'],
      'serif': ['Lora', 'ui-serif', 'Georgia'],
      'mono': ['Inconsolata', 'ui-monospace', 'SFMono-regular']
    },
    extend: {
      colors: {
        'violet': '#A445ED',
        'dark-gray': '#757575'
      },
      gridTemplateColumns: {
        'top-grid': '1fr 80px',
        'header-grid': '1fr auto 100px'
      },
      padding: {
        'xl-x': '350px',
        'xl-t': '58px',
        'xl-b': '124px'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}

