/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.html', // Blade テンプレートで Tailwind のユーティリティクラスを使う場合
    './resources/**/*.jsx',  // React コンポーネントでクラスを使う場合
    './resources/**/*.js',   // 他の JavaScript ファイルでクラスを使う場合
    './resources/**/*.blade.php', // Blade テンプレートファイルを含める
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};