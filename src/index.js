import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx'

// Prevents heroku apps from sleeping by pinging them every 5 minutes
setInterval(() => {
  fetch('https://limelight-dance-ui.herokuapp.com/')
  fetch('https://limelight-dance-core.herokuapp.com/')
}, 300000)

ReactDOM.render(<App />, document.getElementById('root'))