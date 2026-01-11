export const theme = {
  colors: {
    navy: '#234261',
    forest: '#2E734C',
    slate: '#6D92B4',
    cream: '#F4F5F6',
    text: '#0D1626',
    muted: '#3F5972',
    card: '#FFFFFF',
    border: 'rgba(35, 66, 97, 0.15)',
    accent: 'linear-gradient(135deg, #234261, #2E734C)',
  },
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '40px',
    xxl: '64px',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '18px',
    pill: '999px',
  },
  shadows: {
    soft: '0 12px 40px rgba(35, 66, 97, 0.12)',
    strong: '0 20px 60px rgba(35, 66, 97, 0.18)',
    outline: '0 0 0 1px rgba(35, 66, 97, 0.08)',
  },
  typography: {
    fontFamily: '"Figtree", sans-serif;',
    headingFont: '"Figtree", sans-serif;',
    code: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
    h1: 'clamp(2.6rem, 5vw, 4.6rem)',
    h2: 'clamp(2rem, 4vw, 2.9rem)',
    h3: 'clamp(1.4rem, 3vw, 2rem)',
    body: '1rem',
    label: '0.9rem',
  },
  background: {
    bluebirdRadial:   'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 35%),radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 30%),linear-gradient(140deg, #0f2238 0%, #0b3558 50%, #0f1c2e 100%);',
  },
} as const

export type AppTheme = typeof theme
