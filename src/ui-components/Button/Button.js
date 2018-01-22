import styled from 'styled-components'
import { string, bool } from 'prop-types'

const Button = styled.button`
  background: ${props =>
    (props.primary && `${theme.fg}`) ||
    (props.disabled && `${theme.disabled}`) ||
    (props.danger && `${theme.danger}`)};
  width: ${props => (props.full ? '90%' : null)};
  color: ${props => props =>
    props.theme.main ||
    (props.primary && 'white') ||
    ((props.disabled && 'white') || (props.danger && 'white')) ||
    `${theme.fg}`};

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${props => props =>
    (props.theme.main && `2px solid ${props.theme.main}`) ||
    (props.disabled && `2px solid ${theme.disabled}`) ||
    (props.danger && `2px solid ${theme.danger}`) ||
    `2px solid ${theme.fg}`};
`

const theme = {
  fg: 'royalBlue',
  bg: 'white',
  disabled: 'grey',
  danger: 'red'
}
Button.propTypes = {
  primary: bool,
  disabled: bool,
  danger: bool,
  full: bool,
  theme: string
}

export default Button
