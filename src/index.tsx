import firebase from 'firebase/app'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as firebaseConfig from './firebase/firebaseConfig'
import './index.css'

firebase.initializeApp(firebaseConfig)

const rootElement = ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
