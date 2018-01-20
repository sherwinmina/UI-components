import React, { Component } from 'react'
import styles from './App.css'

import { Button, TomatoButton } from './components/Button/Button'

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
      </div>
    )
  }
}

export default App
