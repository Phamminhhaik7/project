/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: '#d9d9d9', // Tên màu tùy chỉnh với mã hex
        primary: '#ff5733', // Bạn có thể thêm nhiều màu khác
      },
      width: {
        '1/10': '10vw',
        '2/10': '20vw',
        '3/10': '30vw',
        '4/10': '40vw',
        '5/10': '50vw',
        '6/10': '60vw',
        '7/10': '70vw',
        '8/10': '80vw',
        '9/10': '90%',
        '10/10': '100vw',
      },
      fontSize: {
        '5vw':'5vw'
      },
      left:{
        '1/10':"50%"
      }
    },
  },
  plugins: [],
}
