/* eslint-disable global-require */
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.sass'

export default () => (
  <div className="navbar">
    <Link to="/"><img src="https://cdn.kevinchik.me/logo.png" alt="logo" /></Link>
    &nbsp;
    <div className="links">
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
