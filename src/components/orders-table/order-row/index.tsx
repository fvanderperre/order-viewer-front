import { TableRow, TableCell } from '@material-ui/core'
import React from 'react'
import { formatAddress, OrderDTO } from '../../../core/models/order.model'

const OrderRow = (order: OrderDTO, index: number) => (
    <TableRow key={index} >
        <TableCell component='th' scope='row'>
            {order.title}
        </TableCell>
        <TableCell align='right'>{formatAddress(order.address || {})}</TableCell>
        <TableCell align='right'>{order.customer?.name}</TableCell>
        <TableCell align='right'>{order.bookingDate.toLocaleString('de-DE')}</TableCell>
        <TableCell align='right'>{order.uid}</TableCell>
    </TableRow>
    
)

export default OrderRow
