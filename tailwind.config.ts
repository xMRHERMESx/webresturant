import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F4F1ED',
        'cream-light': '#FAF8F5',
        charcoal: '#1A1A1A',
        espresso: '#2B1B14',
        terracotta: '#A84535',
        coral: '#D4735A',
        'warm-orange': '#E8956B',
        'powder-blue': '#5B85A0',
        'sky-blue': '#8BAFC8',
        beige: '#E8DFD3',
        'warm-beige': '#D4C5B0',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 10vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'hero': ['clamp(2.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'heading': ['clamp(2rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'subheading': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
