import React from 'react'
import './App.css'
import logo from './logo.svg'
import firebase from "firebase"

function App() {

  const firebaseApp = firebase.apps[0]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <h1>React & Firebase</h1>
        <code>
          <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
        </code>
      </div>
    </div>
  )
}

export default App
