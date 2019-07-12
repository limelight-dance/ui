import React from 'react'
import './Crew.sass'
import content from './content.json'

export default () => (
  <div className="single-column">
    <h1>Meet our Crew</h1>
    <p>{ content.first }</p>
    <p>{ content.second }</p>
    <p>{ content.third }</p>
  </div>
)
