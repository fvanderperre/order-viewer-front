import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../core/constants/routes'
 
 
const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.HOME_PAGE}>Home page</Link>
      </li>
      <li>
        <Link to={ROUTES.ORDERS_PAGE}>User home page</Link>
      </li>
    </ul>
  </div>
)
 
export default Navigation
