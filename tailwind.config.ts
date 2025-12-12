/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: 'var(--color-primary)',
            dark: 'var(--color-primary-dark)',
            light: 'var(--color-primary-light)',
            50: 'var(--color-primary-light)',
            100: 'var(--color-primary-light)',
            200: 'var(--color-primary-light)',
            300: 'var(--color-primary)',
            400: 'var(--color-primary)',
            500: 'var(--color-primary)',
            600: 'var(--color-primary-dark)',
            700: 'var(--color-primary-dark)',
            800: 'var(--color-primary-dark)',
            900: 'var(--color-primary-dark)',
          },
          accent: {
            DEFAULT: 'var(--color-accent)',
            400: 'var(--color-accent)',
            500: 'var(--color-accent)',
            600: 'var(--color-primary)',
          },
          background: 'var(--color-bg)',
          'background-soft': 'var(--color-bg-soft)',
          border: 'var(--color-border)',
          text: 'var(--color-text)',
          'text-muted': 'var(--color-text-muted)'
        }
      },
    },
    plugins: [],
  }
