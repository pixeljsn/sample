module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        codexa: {
          deep: '#0b1f3a',
          teal: '#2dd4bf',
          cyan: '#22d3ee'
        }
      },
      backgroundImage: {
        'codexa-gradient': 'linear-gradient(90deg, #2dd4bf 0%, #38bdf8 50%, #22d3ee 100%)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        scaleUp: {
          '0%': { opacity: .8, transform: 'scale(.97)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn .7s ease both',
        'scale-up': 'scaleUp .5s ease both'
      }
    }
  }
};
