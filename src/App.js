import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './component/Home';
import Login from './component/Login';
import Page_home from './component/Page_home';
import Page_guide from './component/Page_guide';
import Page_change from './component/Page_change';
import Page_aboutme from './component/Page_aboutme';


import "mdbreact/dist/css/mdb.css";
import fire from './config/fire';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener()
  }


  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }


  render() {
    if (this.state.user == null) {
      return (
        <div>
          <Login />
        </div>

      );
    }
    return (
      <div>
        <Route exact path="/" component={Page_home} />
        <Route path="/login" component={Login} />
        <Route path="/page_home" component={Page_home} />
        <Route path="/page_guide" component={Page_guide} />
        <Route path="/page_change" component={Page_change} />
        <Route path="/page_aboutme" component={Page_aboutme} />
      </div>
    )

  }
}
export default App