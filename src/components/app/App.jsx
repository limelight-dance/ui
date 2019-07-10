import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../shared/Navbar.jsx'
import About from '../about/About.jsx'
import Media from '../media/Media.jsx'
import Crew from '../crew/Crew.jsx'
import Contact from '../contact/Contact.jsx'
import NotFound from '../not_found/NotFound.jsx'
import Footer from '../shared/Footer.jsx'
import './App.sass'

export default () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/media" component={Media} />
        <Route path="/crew" component={Crew} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
)
