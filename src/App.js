import React from 'react'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, CancelButton } from './elements'

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Button>Say Hello</Button>
    <Button modifiers='cancel'>Cancel via Type</Button>
    <Button modifiers='cancel'>Don't Say Hello</Button>
    <Button modifiers='small'>Say Hello</Button>
    <Button modifiers={['small', 'cancel']}>Don't Say Hello</Button>
  </>
)

export default App
