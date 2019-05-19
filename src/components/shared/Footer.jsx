import React, { Component } from 'react'
import styles from './Footer.sass'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="links">
          <a href="https://www.youtube.com/channel/UC40GdqVnIsD23o_5fYvy3dQ"><i className="fab fa-youtube" /></a>
          <a href="https://www.facebook.com/limelightdancecrew/"><i className="fab fa-facebook-square" /></a>
          <a href="https://www.instagram.com/limelight_dance_crew/"><i className="fab fa-instagram" /></a>
        </div>
      </div>
    )
  }
}

export default Footer
