import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.sass'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="links">
          <Link to="/">ABOUT</Link>&nbsp;
          <Link to="/media">MEDIA</Link>&nbsp;
          <Link to="/calendar">CALENDAR</Link>&nbsp;
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
