module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'review-hub-base': '#201f24',
        'review-hub-base-green': '#9aef0a',
        'review-hub-base-green-light': '#b7eb60',
        'review-hub-base-dark': '#19181c',
      },
      gridTemplateRows: {
        'review-card': '100px auto 1fr auto',
      }
    },
  },
  plugins: [],
}
