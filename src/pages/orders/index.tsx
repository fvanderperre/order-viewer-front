import React from 'react'
import OrderList from '../../components/orders'
import { SignOut } from '../../components/signout'
import Unauthorized from '../../components/unauthorized'
import { AuthUserContext } from '../../core/session'

const Orders = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <OrdersAuth /> : <OrdersNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
)

const OrdersAuth = () => (
    <div>

        <SignOut />
        <AuthUserContext.Consumer>
            {(authUser) => <OrderList authUser={authUser} />}
        </AuthUserContext.Consumer>
    </div>
)



const OrdersNonAuth = () => (
    <Unauthorized />
)

export default Orders