import React, { Component } from 'react'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      message: ''
    }
  }

  componentDidMount() {
  }

  updateEmail = evt => {
    this.setState({
      email: evt.target.value
    })
  }

  updateMessage = evt => {
    this.setState({
      message: evt.target.value
    })
  }

  send = () => {
  }

  render() {
    return (
      <div className="single-column">
        <h1>Contact</h1>
        <input onChange={ this.updateEmail } placeholder="Email" />&nbsp;
        <input onChange={ this.updateMessage } placeholder="Message" />&nbsp;
        <button onClick={ this.send }>Send</button>
      </div>
    )
  }
}

export default Contact
