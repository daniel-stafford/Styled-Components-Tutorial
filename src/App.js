import React from 'react'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Card } from './elements'

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <main>
      <Card>
        <h2>This is a heading</h2>
        <Card.Button>Say Hello</Card.Button>
        <Card.Button modifiers='cancel'>Don't Say Hello</Card.Button>
      </Card>
      {/* <Button modifiers='cancel'>Don't Say Hello</Button>
      <Button modifiers='small'>Say Hello</Button>
      <Button modifiers={['small', 'cancel']}>Don't Say Hello</Button> */}
    </main>
  </>
)

export default App
