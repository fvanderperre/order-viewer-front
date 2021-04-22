
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Firebase, { FirebaseContext } from './core/firebase'
import './index.css'
import './components/order-details/order-details.css'
import './components/orders-table/order-row/order-row.css'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>,
  </React.StrictMode>,
  document.getElementById('root')
)
