import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx'

// Prevents heroku apps from sleeping by pinging them every 5 minutes
if (process.env.PRODUCTION) {
  setInterval(() => {
    fetch(process.env.URL)
    fetch(process.env.CORE_URL)
  }, 300000)
}

ReactDOM.render(<App />, document.getElementById('root'))