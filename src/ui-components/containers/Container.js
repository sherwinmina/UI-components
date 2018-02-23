import styled from 'styled-components'
import { string, bool } from 'prop-types'

const Content = styled.div`
  background: papayawhip;
  height: 3em;
  width: 3em;

  @media (max-width: 700px) {
    background: palevioletred;
  }
`
