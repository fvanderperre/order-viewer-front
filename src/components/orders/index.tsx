import { makeStyles, Paper, Table, TableContainer } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import React, { Component } from 'react';
import Firebase, { withFirebase } from '../../core/firebase';
import { isOrderValid, OrderDTO } from '../../core/models/order.model';
import OrderTableHeaders from '../orders-table/order-header';
import OrderRow from '../orders-table/order-row';

interface OrderListProps {
  firebase: Firebase
  authUser: any
}

interface OrderListState {
  orders: Array<OrderDTO>
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

class OrderList extends Component<OrderListProps, OrderListState> {

  constructor(props: any) {
    super(props)

    this.state = {
      orders: [],
    }
  }

  componentDidMount = () => {
    this.fetchOrders()
      .then((orders: Array<OrderDTO>) => {
        const validOrders = orders.filter((order) => isOrderValid(order))
        this.setState({ orders: validOrders })


      })
  }

  componentWillUnmount = () => {
  }

  fetchOrders = (): Promise<Array<OrderDTO>> => {
    const orderDoc = this.props.firebase.db.collection('orders')
    return orderDoc.get()
      .then((doc) => {
        if (doc) {
          return doc.docs
            .map(d => ({ uid: d.id, ...d.data() } as OrderDTO))
        }
        throw new Error('cannot retrieve data')
      })
  }

  render = () => (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <OrderTableHeaders />
        <TableBody>
          {this.state.orders.map((order, index) => (OrderRow(order, index)))}
        </TableBody>
      </Table>
    </TableContainer>

  )

  /*
      {this.state.orders.map((order) => (
        <p key={order.uid}>Hello, {order.title} from {order.bookingDate}!</p>
      ))}
  */
}

export default withFirebase(OrderList)
