import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"><img src="https://cdn.kevinchik.me/limelight/logo.png" alt="" /></Link>
      &nbsp;
      <div>
        <Link to="/">About</Link>
        &nbsp;
        <Link to="/media">Media</Link>
        &nbsp;
        <Link to="/crew">Crew</Link>
        &nbsp;
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
