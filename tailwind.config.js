/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ebony: '#0A0A09',
        obsidian: '#11110F',
        card: '#171614',
        cream: '#F5EBDD',
        'secondary-text': '#A7A19A',
        muted: '#706B64',
        accent: '#D98B3A',
        'accent-dark': '#B96D2D',
        gilded: '#E8B56B',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.75rem, 7.5vw, 7rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
        'subhead': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.15' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
