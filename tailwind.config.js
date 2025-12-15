/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif'],
            },
            colors: {
                'bg-primary': '#ffffff',
                'bg-secondary': '#f8fafc',
                'bg-tertiary': '#f1f5f9',
                'text-primary': '#0f172a',
                'text-secondary': '#475569',
                'accent-primary': '#2563eb',
            }
        },
    },
    plugins: [],
}
