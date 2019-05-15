import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from '../about/About.jsx'
import Calendar from '../calendar/Calendar.jsx'
import Contact from '../contact/Contact.jsx'
import Media from '../media/Media.jsx'
import styles from './App.sass'

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={ About } />
        <Route path="/calendar" component={ Calendar } />
        <Route path="/contact" component={ Contact } />
        <Route path="/media" component={ Media } />
      </div>
    </Router>
  )
}

export default App