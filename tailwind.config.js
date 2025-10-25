/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'bgclr-0': 'hsl(0, 0%, 12%)',
                'bgclr-1': 'hsl(0, 0%, 15%)',
                'bgclr-2': 'hsl(0, 0%, 19%)',
                'bgclr-3': 'hsl(0, 0%, 23%)',
                'txtclr-muted': 'hsl(0, 0%, 70%)',
                'txtclr': 'hsl(0, 0%, 95%)',
            },
        },
    },
    plugins: [],
}

