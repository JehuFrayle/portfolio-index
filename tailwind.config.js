module.exports = {
  content: [
    "./public/index.html", "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      backgroundSize: {
        '200%': '200%',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translatey(0)',
            'box-shadow': '0 5px 15px 0px rgba(0, 0, 0, 0.6)'
          },
          '50%': {
            transform: 'translatey(-20px)',
            'box-shadow': '0 25px 15px 0px rgba(0, 0, 0, 0.2)'
          }
        }
      },
      animation: {
        'avatar-animation': 'float 6s ease-in-out infinite',
      },
      colors: {
        'mistyBlue': '#C3CEDA',
        'blueGray': '#738FA7',
        'midnightBlue': '#0C4160',
        'darkBlue': '#071330',
        'jsYellow': '#F7DF1E',
        'tsBlue': '#3178C6',
      }
    },
    plugins: [],
  }
}
