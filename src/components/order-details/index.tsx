import { Tooltip } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import React, { Component } from 'react';
import { formatAddress, formatCustomer, OrderDTO } from '../../core/models/order.model';

interface OrderDetailsProps {
    order: OrderDTO
}

class OrderDetails extends Component<OrderDetailsProps>{

    constructor(props: any) {
        super(props)
    }

    editTitle = () => {
        // TODO
    }


    editBookingDate = () => {
        // TODO
    }

    render = () => {
        const order = this.props.order

        return (
            <div className="order-details-container">
                <div className="order-details-row">
                    <div className="order-details-label">
                        <span>Title</span>
                        <Tooltip title="view details" placement="right" onClick={this.editTitle}>
                            <CreateIcon />
                        </Tooltip>
                    </div>
                    <div>
                        {order.title}
                    </div>
                </div>

                <div className="order-details-row">
                    <div className="order-details-label">
                        <span>Booking Date</span>
                        <Tooltip title="view details" placement="right" onClick={this.editBookingDate}>
                            <CreateIcon />
                        </Tooltip>
                    </div>
                    <div>
                        {order.bookingDate.toLocaleString('de-DE')}
                    </div>
                </div>
                <div className="order-details-row">
                    <div className="order-details-label">
                        Customer
                    </div>
                    <div>
                        {formatCustomer(order.customer || {})}
                    </div>
                </div>
                <div className="order-details-row">
                    <div className="order-details-label">
                        Address
                    </div>
                    <div>
                        {formatAddress(order.address || {})}
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderDetails
