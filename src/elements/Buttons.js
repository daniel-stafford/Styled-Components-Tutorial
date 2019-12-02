import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { main, elevation } from '../utilities'

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    padding: 3px 10px; 
  `,
  cancel: () => `
    background: tomato;
  `
}

export const Button = styled.button`
  ${elevation[1]};
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 2rem;
  background: ${main.tertiary};
  transition: 0.3s ease box-shadow;
  &:hover {
    ${elevation[2]};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`

export const CancelButton = styled(Button)`
  background: tomato;
`
