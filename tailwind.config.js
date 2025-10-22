/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'bgclr-0': 'hsl(0, 0%, 10%)',
                'bgclr-1': 'hsl(0, 0%, 15%)',
                'bgclr-2': 'hsl(0, 0%, 20%)',
                'txtclr-muted': 'hsl(0, 0%, 70%)',
                'txtclr': 'hsl(0, 0%, 95%)',
            },
        },
    },
    plugins: [],
}

