import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import './App.css'
import * as ROUTES from './core/constants/routes'
import { withAuthentication } from './core/session'
import Home from './pages/home'
import Orders from './pages/orders'

const App = () => (
    <Router>
        <Route exact path={ROUTES.HOME_PAGE} component={Home} />
        <Route exact path={ROUTES.ORDERS_PAGE} component={Orders} />
    </Router>
)

export default withAuthentication(App)
