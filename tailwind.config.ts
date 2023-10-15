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
