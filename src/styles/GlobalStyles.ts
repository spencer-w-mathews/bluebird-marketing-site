import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: light;
    background: ${({theme}) => theme.colors.cream};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({theme}) => theme.typography.fontFamily};
    color: ${({theme}) => theme.colors.text};
    background:
      radial-gradient(circle at 12% 18%, rgba(35, 66, 97, 0.25), transparent 34%),
      radial-gradient(circle at 82% 6%, rgba(46, 115, 76, 0.22), transparent 32%),
      radial-gradient(circle at 68% 72%, rgba(35, 66, 97, 0.18), transparent 42%),
      linear-gradient(135deg, rgba(35, 66, 97, 0.12) 0%, rgba(244, 245, 246, 0.9) 55%, rgba(109, 146, 180, 0.18) 100%);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, textarea {
    font-family: inherit;
  }

  ::selection {
    background: ${({theme}) => theme.colors.slate};
    color: #ffffff;
  }
`
