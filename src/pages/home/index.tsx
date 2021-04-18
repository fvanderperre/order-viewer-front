import React from 'react'
import { FirebaseContext } from '../../core/firebase'

const Home = () => (
    <div>
        <FirebaseContext.Consumer>
            {firebase => {
                return <div>I've access to Firebase and render something.</div>
            }}
        </FirebaseContext.Consumer>
        landing :D
    </div>
)

export default Home
