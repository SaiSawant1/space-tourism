/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'background-crew-d': "url('/crew/background-crew-desktop.jpg')",
        'background-crew-m': "url('/crew/background-crew-mobile.jpg')",
        'background-crew-t': "url('/crew/background-crew-tablet.jpg')",
        'background-home-d': "url('/home/background-home-desktop.jpg')",
        'background-home-t': "url('/home/background-home-tablet.jpg')",
        'background-home-m': "url('/home/background-home-mobile.jpg')",
        'background-tech-d': "url('/technology/background-technology-desktop.jpg')",
        'background-tech-t': "url('/technology/background-technology-tablet.jpg')",
        'background-tech-m': "url('/technology/background-technology-mobile.jpg')",
        'background-des-d': "url('/destination/background-destination-desktop.jpg')",
        'background-des-t': "url('/destination/background-destination-tablet.jpg')",
        'background-des-m': "url('/destination/background-destination-mobile.jpg')",
      },
      colors: {
        'black': '#0B0D17',
        'purple': "#D0D6F9",
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
