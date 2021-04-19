import React, { Component } from 'react'
import Firebase, { withFirebase } from '../../core/firebase'


interface OrderListProps {
    firebase: Firebase
    authUser: any
}
class OrderList extends Component<OrderListProps> {
    constructor(props: any) {
        super(props)

        this.fetchOrders()
    }


    fetchOrders = () => {
        const orderDoc = this.props.firebase.db.collection('orders')
            .doc(this.props.authUser.uid)

        orderDoc.get()
            .then((doc) => {
                if (doc.exists) {
                    console.log('Document data:', doc.data())
                } else {
                    // doc.data() will be undefined in this case
                    console.log('No such document!')
                }
            }).catch((error) => {
                console.log('Error getting document:', error)
            })
    }


    render = () => (
        <div>
            TODO : fetch the commands  and display them
        </div>
    )
}



export default withFirebase(OrderList)
