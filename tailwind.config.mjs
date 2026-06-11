/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#f8f8f8',
          100: '#f1f1f1',
          900: '#111111',
        }
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
