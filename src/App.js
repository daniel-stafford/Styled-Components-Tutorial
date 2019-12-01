import React from 'react'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, CancelButton } from './elements'

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Button>Say Hello</Button>
    <Button type='cancel'>Cancel via Type</Button>

    <CancelButton>Don't Say Hello</CancelButton>
    <Button size='small'>Say Hello</Button>
    <CancelButton size='small'>Don't Say Hello</CancelButton>
  </>
)

export default App
