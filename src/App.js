import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from './pages/dashboard';
import Login from './pages/login';
import './style.css';
import Header from './components/header';
import Footer from './components/footer';
import Root from './pages/root';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path={'/root'} component={Root}>
              <div>Hello</div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
