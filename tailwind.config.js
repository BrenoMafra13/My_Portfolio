export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        base: 'var(--bg)',
        surface: 'var(--surface)',
        line: 'var(--line)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-strong': 'var(--accent-strong)',
        'button-text': 'var(--button-text)',
        glass: 'var(--glass)',
      },
      boxShadow: {
        soft: '0 20px 40px rgba(59, 130, 246, 0.2)',
      },
    },
  },
  plugins: [],
}
