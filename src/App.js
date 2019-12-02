import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, Card } from './elements'

const theme = {
  colors: {
    primary: '#E54B4B',
    secondary: '#DBDE61'
  }
}

const themeTwo = {
  colors: {
    primary: '#004445',
    tertiary: '#6fb98f'
  }
}

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main
        css={`
          background: red;
          h2 {
            font-size: 50px;
          }
        `}
      >
        <Button>Say Hello</Button>
        <ThemeProvider theme={themeTwo}>
          <Card>
            <h2>This is a heading</h2>
            <Card.Button modifiers='cancel'>Don't Say Hello</Card.Button>
          </Card>
        </ThemeProvider>

        {/* <Button modifiers='cancel'>Don't Say Hello</Button>
      <Button modifiers='small'>Say Hello</Button>
    <Button modifiers={['small', 'cancel']}>Don't Say Hello</Button> */}
      </main>
    </ThemeProvider>
  </>
)

export default App

// const Fake = styled.main`
//   background: red;
//   h2 {
//     font-size: 50px;
//   }
// `
