import React from 'react'
import fire from '../config/fire'

const Home = () => {

const logout = e => {

    fire.auth().signOut();
}

    return (
        <div>
            Home Page
            <button onClick={logout}>logout</button>
            </div>

    )
}

export default Home;