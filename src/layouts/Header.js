import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'
import { main, elevation, fixed } from '../utilities'

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt='logo' className='logo' />
  </header>
)

export default styled(Header)`
  background: ${main.primary};
  padding: 10px 5%;
  width: 100%;
  ${fixed()};
  ${elevation[2]};
  .logo {
    width: 60px;
  }
`
