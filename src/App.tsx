import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Navigation from './components/navigation'
import Orders from './pages/orders'
import * as ROUTES from './core/constants/routes'

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.HOME_PAGE} component={Home} />
        <Route path={ROUTES.ORDERS_PAGE} component={Orders} />
      </Router>
    </div>
  )
}

export default App
