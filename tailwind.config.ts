import type { Config } from 'tailwindcss'

export default {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                bg: '#0b1020',
                card: '#111936',
                muted: '#9aa4bf',
                primary: '#5b8cff',
                danger: '#ff5b7f',
            }
        }
    },
    plugins: []
} satisfies Config