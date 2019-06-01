import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.sass'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/"><img src={ require('../../static/logo.png') } /></Link>&nbsp;
        <div className="links">
          <Link to="/">About</Link>&nbsp;
          <Link to="/media">Media</Link>&nbsp;
          <Link to="/crew">Crew</Link>&nbsp;
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
