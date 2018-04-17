import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
            <a href="/root/dashboard">Dashboard</a> | <a href="/root/contact">Contact Us</a> | <a href="/login">Login</a>
            <h1>Header</h1>
      </div>
    )
  }
}
export default Header; 