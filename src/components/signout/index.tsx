
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import * as ROUTES from "../../core/constants/routes"
import Firebase, { withFirebase } from '../../core/firebase'


interface SignoutProps {
    firebase: Firebase
    history: any
}

class SignOutButton extends Component<SignoutProps>{
    constructor(props: any) {
        super(props)
    }

    onClick = () => {
        this.props.firebase.signOut()
            .then(() => this.props.history.push(ROUTES.HOME_PAGE))
    }

    render = () => (
        <button type="button" onClick={this.onClick}>
            Sign Out
        </button>
    )
}

const SignOut = compose(
    withRouter,
    withFirebase,
)(SignOutButton)

export { SignOut }
