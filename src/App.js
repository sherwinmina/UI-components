import React, { Component } from 'react'
import styles from './App.css'

import Button from './components/Button/Button'

class App extends Component {
  render() {
    return (
      <div>
        <Button full primary>
          Hello
        </Button>
      </div>
    )
  }
}

export default App
