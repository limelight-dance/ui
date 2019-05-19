import React, { Component } from 'react'
import Navbar from '../shared/Navbar.jsx'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      members: []
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/members/')
    .then(res => res.json())
    .then(data => this.setState({
      members: data
    }))
  }

  updateFirstName = evt => {
    this.setState({
      firstName: evt.target.value
    })
  }

  updateLastName = evt => {
    this.setState({
      lastName: evt.target.value
    })
  }

  addMember = () => {
    let firstName = this.state.firstName
    let lastName = this.state.lastName
    fetch('http://127.0.0.1:8000/members/', {
      method: 'POST',
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName
      })
    })
    this.setState({
      members: [...this.state.members, {first_name: firstName, last_name: lastName}]
    })
  }

  render() {
    return (
      <div>
        <br/><br/><br/><br/><br/>
        <input onChange={this.updateFirstName} placeholder="First Name" />&nbsp;
        <input onChange={this.updateLastName} placeholder="Last Name" />&nbsp;
        <button onClick={this.addMember}>Add member</button>

        <p>Members:</p>
        { this.state.members.map((member, index) => (
          <p key={index}>{member.first_name} {member.last_name}</p>
        ))}
      </div>
    )
  }
}

export default Contact
