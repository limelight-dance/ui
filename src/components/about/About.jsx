import React, { Component } from 'react'
import Navbar from '../shared/Navbar.jsx'
import styles from './About.sass'

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img src={require('../../static/stock1.jpg')} />
      </div>
    )
  }
}

export default About
