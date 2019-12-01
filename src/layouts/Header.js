import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'
import { primary, elevation, fixed, serif } from '../utilities'

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt='logo' className='logo' />
    Hello
  </header>
)

export default styled(Header)`
  background: ${primary};
  padding: 10px 5%;
  ${fixed({ yProp: 'bottom', y: '10px' })};
  ${serif}
  ${elevation[2]};
  .logo {
    width: 60px;
  }
`
