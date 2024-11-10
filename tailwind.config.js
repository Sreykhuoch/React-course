// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
