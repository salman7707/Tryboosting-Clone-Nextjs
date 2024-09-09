/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xs: '100%',
        sm: '100%',
        md: '728px', 
        lg: '1024px', 
        xl: '1350px', 
      },
    },
    extend: {
      screens: {
        'xs': '320px',
    },
      keyframes: {
        borderscroll: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        borderscroll: 'borderscroll 7s ease-in-out infinite',
      },
      fontFamily: {
        'my-custom':['my-custom','sans-serif'],
        'my-custom2':['my-custom2','sans-serif']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
