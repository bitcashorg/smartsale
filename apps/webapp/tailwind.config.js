const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        md: '2rem'
      },
      screens: {
        '2xl': '1600px',
      },
    },
    extend: {
      colors: {
        border: 'hsla(var(--border))',
        input: 'hsla(var(--input))',
        ring: 'hsla(var(--ring))',
        background: 'hsla(var(--background))',
        foreground: 'hsla(var(--foreground))',
        primary: {
          DEFAULT: 'hsla(var(--primary))',
          foreground: 'hsla(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsla(var(--secondary))',
          foreground: 'hsla(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsla(var(--destructive))',
          foreground: 'hsla(var(--destructive-foreground))'
        },
        success: {
          DEFAULT: 'hsla(var(--success))',
          foreground: 'hsla(var(--success-foreground))'
        },
        muted: {
          DEFAULT: 'hsla(var(--muted))',
          foreground: 'hsla(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsla(var(--accent))',
          foreground: 'hsla(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsla(var(--popover))',
          foreground: 'hsla(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsla(var(--card))',
          foreground: 'hsla(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography'), addVariablesForColors]
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
