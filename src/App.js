import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './component/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { auth } from 'firebase';
import fire from './config/fire';
import Home from './component/Home';






class App extends Component{
  constructor(props){
    super(props)
      this.state={
        user: {}
      }
    }

  componentDidMount(){
    this.authListener()
  }


  authListener() {
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }


  render(){
    if(this.state.user == null)
    {
    return(
      <div>
        <Login/>
        </div>

    );
    }
    return(
      <div>
        <Home/>
      </div>
    )
  }
}
export default App