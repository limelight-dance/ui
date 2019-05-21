import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.sass'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="background"></div>
        <Link to="/"><img src={ require('../../static/logo-white.png') } /></Link>&nbsp;
        <div className="links">
          <Link to="/media">MEDIA</Link>&nbsp;
          <Link to="/calendar">CALENDAR</Link>&nbsp;
          <Link to="/sponsors">SPONSORS</Link>&nbsp;
          <Link to="/join">JOIN</Link>&nbsp;
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
