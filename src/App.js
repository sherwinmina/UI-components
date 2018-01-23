import React, { Component } from 'react'

import { ThemeProvider } from 'styled-components'

import { Button, TomatoButton, WideButton } from './ui-components'

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
        <div>
          <WideButton>Wide</WideButton>
        </div>
        <ThemeProvider theme={theme}>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
    )
  }
}

export default App
