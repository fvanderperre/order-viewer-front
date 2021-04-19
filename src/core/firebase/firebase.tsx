import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

class Firebase {
    auth: firebase.auth.Auth
    db: firebase.firestore.Firestore

    constructor() {
        firebase.setLogLevel(`info`)
        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth()
        this.db = firebase.firestore()
    }

    signIn = (email: string, password: string): Promise<firebase.auth.UserCredential> =>
        this.auth.signInWithEmailAndPassword(email, password)

    signOut = (): Promise<void> =>
        this.auth.signOut()
}

export default Firebase
