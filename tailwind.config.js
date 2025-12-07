const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: '#FF4C4C', // Vibrant Red
                secondary: '#FFD700', // Gold
                accent: '#4CD964', // Bright Green
                dark: '#17395c',
                light: '#f0f9ff',
                'glass-white': 'rgba(255, 255, 255, 0.1)',
                'glass-dark': 'rgba(23, 57, 92, 0.6)',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                serif: ['Georgia', 'serif'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'blob': 'blob 7s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                "horizontal-pulse": "horizontal-pulse 3s ease-in-out infinite",
                shine: "shine 8s linear infinite",
                aurora: "aurora 60s linear infinite",
            },
            keyframes: {
                "horizontal-pulse": {
                    '0%, 100%': {
                        transform: 'translateX(-100%)',
                    },
                    '50%': {
                        transform: 'translateX(100%)',
                    },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                shine: {
                    "0%": { backgroundPosition: "200% center" },
                    "100%": { backgroundPosition: "-200% center" },
                },
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
            }
        },
    },
    plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
