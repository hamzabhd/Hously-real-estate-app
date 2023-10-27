import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5F5DC',
        grey: '#CCCCCC',
        lightGrey: '#ECECEC',
        whiteHover: '#F6F6F6',
        light: {
          900: '#F0F0F0',
          800: '#F1F1F1',
          700: '#F2F2F2',
          600: '#F3F3F3',
          500: '#F4F4F4',
          400: '#F5F5F5',
          300: '#F6F6F6',
          200: '#F7F7F7',
          100: '#F8F8F8',
          50: '#F9F9F9',
        },
        tealBlue: '#009688',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        popup: {
          '0%': { transform: 'scale(.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        popup: 'popup .3s',
      },
    },
  },
  plugins: [],
}
export default config
