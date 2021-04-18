import React from 'react';
import OrderList from '../../components/orders';
import Unauthorized from '../../components/unauthorized';
import { AuthUserContext } from '../../core/session';

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
    <OrderList />
)

const OrdersNonAuth = () => (
    <Unauthorized />
)

export default Orders