import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherent
}

body {
  margin: 0;
  padding: 79.33px 0 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  width: 90%;
  margin: 0 auto;
}
`

export default GlobalStyle
