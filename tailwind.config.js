/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',         // App Router 쓰는 경우 필수
    './components/**/*.{js,ts,jsx,tsx}',  // 컴포넌트 경로
  ],
  theme: {
    extend: {
      colors: {
        gold: 'var(--color-gold)', // @theme 변수 매핑
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
    },
  },
  plugins: [],
}