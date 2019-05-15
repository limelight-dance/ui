import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/"><span>About</span></Link>&nbsp;
        <Link to="/media"><span>Media</span></Link>&nbsp;
        <Link to="/calendar"><span>Calendar</span></Link>&nbsp;
        <Link to="/contact"><span>Contact</span></Link>
      </div>
    )
  }
}

export default Navbar
