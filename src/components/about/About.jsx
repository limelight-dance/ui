import React, { Component } from 'react'
import Navbar from '../shared/Navbar.jsx'
import styles from './About.sass'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="welcome">
          <img src={ require('../../static/logo-white.png') }/>
        </div>
        <div className="bio">
          <h1>Limelight Dance Crew</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit dolor id nunc ultrices sodales. Proin tristique arcu vel diam bibendum, eget tempus ex tristique. Morbi auctor libero eu dui venenatis, in congue tortor feugiat. Aliquam nec viverra purus, vel consectetur ligula. Donec at augue at mi luctus scelerisque a et est. Sed diam felis, fringilla sed vestibulum non, egestas vitae augue. Phasellus in vehicula nisi. Phasellus quis quam quis dolor laoreet viverra quis ut magna. Ut posuere tincidunt elit vel luctus.
          </p>
        </div>
      </div>
    )
  }
}

export default About
