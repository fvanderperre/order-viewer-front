import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { compose } from "recompose"
import * as ROUTES from "../../core/constants/routes"
import Firebase, { withFirebase } from "../../core/firebase"

interface SigninState {
    email: string
    password: string
    error: any
}

interface SigninProps {
    firebase: Firebase
    history: any
}

const INITIAL_STATE: SigninState = {
    email: '',
    password: '',
    error: null,
}

class SignInFormBase extends Component<SigninProps, SigninState>{
    constructor(props: any) {
        super(props)
        this.state = { ...INITIAL_STATE }
    }

    onSubmit = (event) => {
        const { email, password } = this.state

        this.props.firebase
            .signIn(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE })
                this.props.history.push(ROUTES.ORDERS_PAGE)
            })
            .catch(error => {
                this.setState({ error })
            })

        event.preventDefault()
    }

    onMailChange = event => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = event => {
        this.setState({ password: event.target.value })
    }

    render = () => {
        const { email, password, error } = this.state

        const isInvalid = password === '' || email === ''

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={email}
                    onChange={this.onMailChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onPasswordChange}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign In
          </button>

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase)

export { SignInForm }
