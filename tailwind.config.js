module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#060B18',
        'bg-secondary': '#0D1425',
        'bg-footer': '#03060E',
        'cyan-brand': '#00D4FF',
        'violet-brand': '#7B5EA7',
        'mint-brand': '#00FFB2',
        'amber-brand': '#F6AD55',
        'text-primary': '#F0F4FF',
        'text-muted': '#8892A4',
        'border-default': 'rgba(0,212,255,0.15)',
        'border-glow': 'rgba(0,212,255,0.5)',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'typewriter': 'typewriter 0.5s steps(40) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-violet': '0 0 20px rgba(123, 94, 167, 0.3)',
        'glow-amber': '0 0 20px rgba(246, 173, 85, 0.3)',
      },
    },
  },
  plugins: [],
};
