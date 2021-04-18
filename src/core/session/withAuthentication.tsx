import React from 'react'
import Firebase, { withFirebase } from '../firebase'
import AuthUserContext from './context'

const withAuthentication = Component => {
  class WithAuthentication extends React.Component<{ firebase: Firebase }, { authUser: any }>{
    unsubscribe: any

    constructor(props) {
      super(props)

      this.state = {
        authUser: null,
      }
    }

    componentDidMount() {
      this.unsubscribe = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null })
        },
      )
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }

  return withFirebase(WithAuthentication)
}

export default withAuthentication
