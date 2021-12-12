import React from 'react'
import { Link } from 'react-router-dom'

function EditContact() {
    return (
        <div className="container">
            <div className="row text-center">
                <h1 className="mt-5 col-12">
                    Edit Contact
                </h1>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto shadow">
                    <form class="p-3">
                        <div className="mb-3">
                            <input type="text" placeholder="Name" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <input type="email" placeholder="Email"  className="form-control" />
                        </div>
                        <div className="mb-3">
                            <input type="number" placeholder="Phone Number"  className="form-control" />
                        </div>
                        <div className="d-flex">
                            <input type="submit" value="Update Contact" className="btn btn-dark me-3" />
                            <Link to="/" className="btn btn-block btn-outline-dark" >Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditContact
