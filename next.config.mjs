/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   content: [
    "./pages/images/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage:{
          "hero-img":"url('/bg.jpg')" 
        },
      fontFamily: {
        sans: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
};

export default nextConfig;