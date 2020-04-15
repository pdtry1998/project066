import React, {useState } from 'react';
import './App.css';
import Login from './component/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import fire from './config/fire';
import Home from './component/Home';

const App = () => {


  const [user, setUser] = useState({})


const authListener = () => {

    fire.auth().onAuthStateChanged((user) => {

      if (user) {
       setUser({ user })
      }
      else {
        setUser({ user: null })
      }
    })
  }




    if (user == null) {
      return (
        <div >
          
            <Login />
          
        </div>
      );
    }

    return (
      <div>
        <Home />
      </div>
    )
  }
export default App