import styled from 'styled-components'
import { main, elevation } from '../utilities'

export const Button = styled.button`
  ${elevation[1]};
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 2rem;
  background: ${main.tertiary};
  transition: 0.3s ease box-shadow
  &:hover{
    ${elevation[2]}
  }
  ${({ size }) => {
    if (size === 'small') {
      return `
      font-size: 1rem;
      padding: 3px 10px; 
    `
    }
  }}
/* using type may be nice for 20+ different buttons */
/* if too many overrides, consider making new component */
/* makes for long, ugly component but less importing, exporting*/
  ${({ type }) => {
    if (type === 'cancel') {
      return `
      if too many overrides, consider making new component
      background: tomato;
    `
    }
  }}
`
// extending the button may be nice when only a few different types of buttons
// prettier code but means more exporting and importing
export const CancelButton = styled(Button)`
  background: tomato;
`
