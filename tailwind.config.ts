import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        slideDown: 'slideDown var(--slide-down-duration) linear',
        slideUp: 'slideUp var(--slide-up-duration) linear',
      },
    },
  },
  plugins: [],
} satisfies Config;
