/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',         // App Router 쓰는 경우 필수
    './components/**/*.{js,ts,jsx,tsx}',  // 컴포넌트 경로
  ],
  theme: {
    extend: {
      colors: {
        gold: '#bfa45a',
      },
    },
  },
  plugins: [],
}