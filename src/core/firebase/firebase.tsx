import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'

class Firebase {
    auth: firebase.auth.Auth

    constructor() {
        firebase.setLogLevel(`debug`)
        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth()
    }

    signIn = (email: string, password: string): Promise<firebase.auth.UserCredential> =>
        this.auth.signInWithEmailAndPassword(email, password)
}

export default Firebase
