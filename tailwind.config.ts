import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0B0C10',
        obsidian: '#121212',
        cyan: {
          DEFAULT: '#66FCF1',
          glow: '#66FCF180',
        },
        purple: {
          DEFAULT: '#BB86FC',
          glow: '#BB86FC80',
        },
        bluegrey: {
          900: '#384959',
          700: '#6A89A7',
          500: '#88BDF2',
          300: '#BDDDFC',
        },
      },
      backgroundImage: {
        'gradient-cyan-purple': 'linear-gradient(135deg, #66FCF1 0%, #BB86FC 100%)',
      },
      boxShadow: {
        'cyan-glow': '0 0 15px 2px rgba(102, 252, 241, 0.4)',
        'purple-glow': '0 0 15px 2px rgba(187, 134, 252, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
};

export default config;
