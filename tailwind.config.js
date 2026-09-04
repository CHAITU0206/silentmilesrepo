/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
      },
      colors: {
        // Soft Mode — Ivory + beige + sage
        ivory: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f5efe1',
          300: '#ede3cf',
          400: '#e0d3b5',
          500: '#cdbf96',
        },
        sage: {
          50: '#f4f6f3',
          100: '#e6ebe4',
          200: '#cdd8c9',
          300: '#a9bba3',
          400: '#82a079',
          500: '#658660',
          600: '#4f6b4b',
          700: '#3f563c',
          800: '#334531',
          900: '#2a3829',
        },
        // Adventure Mode — Dark charcoal
        charcoal: {
          50: '#f5f5f4',
          100: '#e7e5e4',
          200: '#d6d3d1',
          300: '#a8a29e',
          400: '#78716c',
          500: '#57534e',
          600: '#44403c',
          700: '#292524',
          800: '#1c1917',
          900: '#0c0a09',
        },
        // Luxury Mode — Champagne gold
        champagne: {
          50: '#fdfbf6',
          100: '#faf3e8',
          200: '#f3e6cf',
          300: '#e8d3a8',
          400: '#d9b978',
          500: '#cda24f',
          600: '#b88a3a',
          700: '#946b2f',
          800: '#735228',
          900: '#5a4122',
        },
        accent: {
          DEFAULT: '#cda24f',
          light: '#e8d3a8',
          dark: '#946b2f',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-delay-1': 'fadeInUp 1s ease-out 0.3s forwards',
        'fade-in-delay-2': 'fadeInUp 1s ease-out 0.6s forwards',
        'fade-in-delay-3': 'fadeInUp 1s ease-out 0.9s forwards',
        'fade-in-delay-4': 'fadeInUp 1s ease-out 1.2s forwards',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(10px)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
