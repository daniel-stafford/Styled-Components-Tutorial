import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import './App.css'

const Heading = styled.h1`
  font-size: 2rem;
`

const color = 'white'

const Button = styled.button`
  background: indigo;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: ${color};
  font-size: 2rem;
  background: ${({ type }) => (type === 'cancel' ? 'tomato' : 'indigo')};
`

const AppWrapper = styled.div`
  header {
    background: teal;
    &:hover {
      background: red;
    }
  }
`

const App = () => {
  return (
    <AppWrapper>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Heading>
          Edit <code>src/App.js</code> and save to reload.
        </Heading>
        <Button type='cancel'>Save</Button>
        <Button type='save'>Save</Button>

        <Heading>Heading two</Heading>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </AppWrapper>
  )
}

export default App
