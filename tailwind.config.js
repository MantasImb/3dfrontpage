/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url('/bg-noise.png')",
        dots: "url('/bg-dots.svg')",
        grid: "url('/bg-grid.svg')"
      },
      colors: {
        lime: '#BFFF00',
        red: '#FF0000'
      },
      animation: {
        blink: 'blink 3s infinite'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' }
        }
      },
      transitionDelay: {
        0: '0ms',
        500: '500ms',
        1000: '1000ms'
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.animate-delay-0': { 'animation-delay': '0ms' },
        '.animate-delay-500': { 'animation-delay': '500ms' },
        '.animate-delay-1000': { 'animation-delay': '1000ms' }
      })
    }
  ]
}
