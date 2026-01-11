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
      background: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme}) => theme.typography.headingFont};
    font-weight: 600;
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
