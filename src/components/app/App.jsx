import React, { Component } from 'react'
import styles from './App.sass'

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Limelight'
    }
  }

  render() {
    return (
      <p class="hello">Hello</p>
    )
  }
}

export default App
