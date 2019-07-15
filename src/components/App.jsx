import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Media from './Media.jsx'
import Crew from './Crew.jsx'
import Contact from './Contact.jsx'
import Error from './Error.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/media" component={Media} />
          <Route path="/crew" component={Crew} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
