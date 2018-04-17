import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from '../logo.svg';
import Header from '../components/header';
import Footer from '../components/footer';
import Dashbord from './dashboard';
import Contact from './contact';

class Root extends Component {
  render() {
    console.log("@@@@", this.props.children)
    return (
      <div className="root">
      <div>
        <Header/>
      </div>
      <div>
        <Route exact path='/root/' component={Dashbord}/>
        <Route exact path='/root/dashboard' component={Dashbord}/>
        <Route exact path='/root/contact' component={Contact}/>
      </div>
      <div>
        <Footer/>
      </div>

        {/* <img src={logo} className="App-logo" alt="logo" width="300"/>   */}
      </div>
    )
  }
}
export default Root; 