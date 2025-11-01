module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        accent: '#6366f1', // indigo-500
        dark: '#0f172a',
        light: '#f8fafc'
      },
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80')",
      }
    },
  },
  plugins: [],
}
