import React from 'react'
import styled, { css } from 'styled-components'
import logo from './logo.svg'
import GlobalStyle from './Global'

const size = {
  small: 400,
  medium: 960,
  large: 1140
}

// const above = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${size[label]}px) {
//       ${css(...args)}
//     }
//   `
//   return acc
// }, {})

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

console.log('above', above)

const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a fake component</h2>
  </div>
)

const DoubleFake = styled(Fake)`
  h2 {
    color: red;
  }
`

// CSS Helper
//needed for props in mixins
const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + 'px'};
  left: 0;
`

const Heading = styled.h1`
  font-size: 2rem;
  ${above.medium`
    color: blue
  `}
`

const color = 'white'

const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  color: ${color};
  font-size: 2rem;
  background: indigo;
`
const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`

const AppWrapper = styled.div`
  header {
    background: teal;
  }
  ${Button} {
    margin-bottom: 2rem;
  }
`

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Heading>
          Edit <code>src/App.js</code> and save to reload.
        </Heading>
        <Fake />
        <DoubleFake />
        <Button>Save</Button>
        <CancelButton top={100}>Cancel</CancelButton>

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
