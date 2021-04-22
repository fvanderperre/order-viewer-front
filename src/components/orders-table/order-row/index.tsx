import { DialogContent, Modal, TableCell, TableRow, Tooltip } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React, { Component } from "react";
import { formatAddress, OrderDTO } from '../../../core/models/order.model';
import OrderDetails from '../../order-details';

interface OrderRowState {
    isModaleOpen: boolean
}

interface OrderRowProps {
    order: OrderDTO
}

class OrderRow extends Component<OrderRowProps, OrderRowState> {

    constructor(props: any) {
        super(props)
        this.state = { isModaleOpen: false, }
    }

    handleOpen = () => {
        console.log('handleOpen')
        this.setState({ isModaleOpen: true })
    }

    handleClose = () => {
        console.log('handleClose')
        this.setState({ isModaleOpen: false })
    }
    render = () => {
        const order = this.props.order

        return (
            <TableRow>
                <TableCell component='th' scope='row' className="flex-between">
                    <span>
                        {order.title}

                    </span>
                    <Tooltip title="view details" placement="right" onClick={this.handleOpen}>
                        <VisibilityIcon />
                    </Tooltip>
                </TableCell>
                <TableCell align='right'>{formatAddress(order.address || {})}</TableCell>
                <TableCell align='right'>{order.customer?.name}</TableCell>
                <TableCell align='right'>{order.bookingDate.toLocaleString('de-DE')}</TableCell>
                <TableCell align='right'>{order.uid}</TableCell>

                <Modal
                    open={this.state.isModaleOpen}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <DialogContent>
                        <OrderDetails order={order} />
                    </DialogContent>
                </Modal>
            </TableRow>
        )
    }

}

export default OrderRow
