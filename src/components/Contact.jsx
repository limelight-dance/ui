import React, { Component } from 'react'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      message: '',
    }
  }

  updateEmail(event) {
    this.setState({
      email: event.target.value,
    })
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value,
    })
  }

  send(event) {
    event.preventDefault()
    const { email, message } = this.state
    console.log(email)
    console.log(message)
  }

  render() {
    return (
      <div className="contact-page">
        <h1>Contact</h1>
        <form onSubmit={this.send}>
          <input onChange={this.updateEmail} placeholder="Email" />
          &nbsp;
          <input onChange={this.updateMessage} placeholder="Message" />
          &nbsp;
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default Contact
