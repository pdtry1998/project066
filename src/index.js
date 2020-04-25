import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom';
import config from '../src/component/config'
import firebase from 'firebase/app'
import 'firebase/firestore'

if (firebase.apps.length === 0)
  firebase.initializeApp(config)

export const firestore = firebase.firestore()

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)

serviceWorker.unregister();