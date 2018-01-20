import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  background: ${props => (props.disabled ? 'grey' : null)};
  width: ${props => (props.full ? '90%' : null)};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const TomatoButton = Button.extend`
  color: tomato;
  border-color: tomato;
`

const theme = {
  fg: 'palevioletred',
  bg: 'white'
}

export default Button
