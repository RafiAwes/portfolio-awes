import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', 'sans-serif'],
                display: ['var(--font-display)', 'sans-serif'],
            },
            colors: {
                dark: '#050505',
                darkCard: '#1A1A1A',
                lightBg: '#FAFAFA',
                primary: '#3b82f6', // Blue-500
                secondary: '#8b5cf6', // Violet-500
            },
            animation: {
                marqee: 'marqee 60s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
};
export default config;