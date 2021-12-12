import React from 'react'

function AddContact() {
    return (
        <div className="container">
            <div className="row text-center">
                <h1 className="mt-5 col-12">
                    Add Contact
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
                        <div>
                            <input type="submit" value="Add Student" className="btn btn-block btn-dark" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
