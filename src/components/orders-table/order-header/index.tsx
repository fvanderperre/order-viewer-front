import { TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

const OrderTableHeaders = () => (
    <TableHead>
        <TableRow>
            <TableCell >Title</TableCell>
            <TableCell align='right'>Address</TableCell>
            <TableCell align='right'>Customer</TableCell>
            <TableCell align='right'>Booking Date</TableCell>
            <TableCell align='right'>Order uid</TableCell>
        </TableRow>
    </TableHead>
)

export default OrderTableHeaders
