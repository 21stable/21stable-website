import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cathy Dolle inspired - minimal 2-color palette (default theme)
        background: '#ffffff',
        foreground: '#000000',
        muted: '#666666',
        subtle: '#999999',
        surface: '#fafafa',
        surfaceHover: '#f5f5f5',
        border: '#e5e5e5',
        accent: '#000000',
        
        // Product Palette theme colors
        paper: 'var(--paper)',
        cream: 'var(--cream)',
        ink: 'var(--ink)',
        warm: 'var(--warm-muted)',
        terracotta: 'var(--accent)',
        steel: 'var(--accent2)',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}

export default config