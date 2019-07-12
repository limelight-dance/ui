/* eslint-disable global-require */
import React from 'react'
import './About.sass'
import content from './content.json'

export default () => (
  <div className="about">
    <div className="welcome">
      <div className="img"><img src="https://cdn.kevinchik.me/logo-white.png" alt="logo" /></div>
    </div>
    <div className="single-column">
      <h1>Limelight Dance Crew</h1>
      <p>{ content.about }</p>
    </div>
    <div className="multi-column">
      <div className="column">
        <h1>Tutorials</h1>
        <p dangerouslySetInnerHTML={{ __html: content.tutorials }} />
      </div>
      <div className="column">
        <h1>Covers</h1>
        <p dangerouslySetInnerHTML={{ __html: content.covers }} />
      </div>
      <div className="column">
        <h1>Performances</h1>
        <p dangerouslySetInnerHTML={{ __html: content.performances }} />
      </div>
    </div>
  </div>
)
