import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx'

setInterval(() => {
  fetch('https://limelight-dance-ui.herokuapp.com/')
  fetch('https://limelight-dance-core.herokuapp.com/')
}, 1000)

ReactDOM.render(<App />, document.getElementById('root'))