import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
  background: ${({ theme ,gh}) =>gh? theme.colors.body:theme.colors.replace };
  font-family: sans-serif;
}

`

export default GlobalStyles;