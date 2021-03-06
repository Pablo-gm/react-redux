import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-end">
                    <Link to="/add" className="btn btn-outline-dark">
                        Add Contact
                    </Link>
                </div>
            </div>
            <div className="col-md-6 mx-auto">
                <h1>Welcome to Home</h1>
            </div>
        </div>
    )
}

export default Home
