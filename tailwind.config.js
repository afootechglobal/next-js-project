/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    animation: {
      'slide-up-fade': 'slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      'slide-down-fade': 'slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      'zoom-in': 'zoom-in 0.5s ease-in',
      'fade-in': 'fadeIn 0.5s ease-in',
      'slide-left': 'slide-left 0.5s ease-in',
      'slide-right': 'slide-right 0.5s ease-in',
    },
    keyframes: {
      'slide-up-fade': {
        '0%': { opacity: 0, transform: 'translateY(6px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      'slide-down-fade': {
        '0%': { opacity: 0, transform: 'translateY(-6px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      'zoom-in': {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-left': {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
    },



    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
