/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "dark"
  ],
  mode: 'jit',
  theme: {
    fontSize: {
      'heading': '32px',
      'heading-lg': '64px',
      sm : '15px',
      'md': '18px',
      

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
      },
      boxShadow: {
        'shadow-violet':'0px 5px 30px 0px rgba(164,69,237,1)'
      }
    },
    variants: {
      extend: {
        backgroundColor: ['checked'],
        borderColor: ['checked']
      },
      fill: ['hover', 'focus']
    }
  },
  plugins: [
  ],
}

