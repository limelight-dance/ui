import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from '../shared/Navbar.jsx'
import About from '../about/About.jsx'
import Media from '../media/Media.jsx'
import Calendar from '../calendar/Calendar.jsx'
import Sponsors from '../sponsors/Sponsors.jsx'
import Join from '../join/Join.jsx'
import Contact from '../contact/Contact.jsx'
import Footer from '../shared/Footer.jsx'
import styles from './App.sass'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={ About } />
        <Route path="/media" component={ Media } />
        <Route path="/calendar" component={ Calendar } />
        <Route path="/sponsors" component={ Sponsors } />
        <Route path="/join" component={ Join } />
        <Route path="/contact" component={ Contact } />
        <Footer />
      </div>
    </Router>
  )
}

export default App