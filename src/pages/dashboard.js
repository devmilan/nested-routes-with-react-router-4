import React, { Component } from 'react';
import logo from '../logo.svg';

class Dashbord extends Component {
  render() {
    return (
      <div className="dashbord">

        <img src={logo} className="App-logo" alt="logo" width="300"/>  
        <h1>Dashbord</h1>
      </div>
    )
  }
}
export default Dashbord; 