import React, { Component } from 'react'
import styles from './App.css'

import { ThemeProvider } from 'styled-components'

import { Button, TomatoButton, WideButton } from './components/Button/Button'

const theme = { main: 'mediumseagreen' }

class App extends Component {
  state = { isDisabled: false }
  render() {
    return (
      <div>
        <Button>Hello</Button>
        <Button primary>Hello</Button>
        <Button disabled>Hello</Button>
        <Button danger>Hello</Button>
        <Button primary full>
          Hello
        </Button>
        <TomatoButton>Tomato</TomatoButton>
        <WideButton>Wide</WideButton>
        <ThemeProvider theme={theme}>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
    )
  }
}

export default App
