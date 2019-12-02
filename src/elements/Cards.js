import styled from 'styled-components'
// when inside folder with index, import directly to avoid circular bug
import { Button } from './Buttons'

import { elevation } from '../utilities'

export const Card = styled.div`
  border-radius: 6px;
  padding: 10px;
  ${elevation[1]};
`
const CardButton = styled(Button)`
  width: 100%;
`

Card.Button = CardButton
