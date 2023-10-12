import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'DAVYGREY': {
          DEFAULT: '#dcdddd',
          100: '#b8bbba',
          200: '#959998',
          300: '#727775',
          400: '#505352',
          500: '#404342',
          600: '#303231',
          700: '#202121',
          800: '#101110',
          900: '#505352',
        },
        'RAWUMBER': {
          DEFAULT: '#e9e1dc',
          100: '#d4c4ba',
          200: '#bea697',
          300: '#a98975',
          400: '#8e6d59',
          500: '#715747',
          600: '#554135',
          700: '#382b23',
          800: '#1c1612',
          900: '#8E6D59',
        },
        'PLATINUM': {
          DEFAULT: '#f6f8f7',
          100: '#eef2ef',
          200: '#e5ebe8',
          300: '#dce5e0',
          400: '#d2ddd7',
          500: '#a2b9ac',
          600: '#719480',
          700: '#4b6355',
          800: '#25312b',
          900: '#D2DDD7',
        },
        'GUNMETAL': {
          DEFAULT: '#cdd7db',
          100: '#9bb0b8',
          200: '#698894',
          300: '#455a62',
          400: '#222c30',
          500: '#1b2326',
          600: '#141a1d',
          700: '#0e1213',
          800: '#07090a',
          900: '#222C30',
        },
        'PAYNESGREY': {
          DEFAULT: '#cfe4ed',
          100: '#9fcadb',
          200: '#6fafc8',
          300: '#4392b1',
          400: '#306980',
          500: '#275568',
          600: '#1d404e',
          700: '#142b34',
          800: '#0a151a',
          900: '#306980',
        },
      },
      
    },
  },
  plugins: [],
}

export default config
