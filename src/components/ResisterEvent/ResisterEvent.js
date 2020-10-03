import React from 'react';

const ResisterEvent = () => {
    return  (
        <div className='container'>
            <div className="row mt-5 d-flex flex-column">
                <img className='d-block mx-auto' src="https://i.ibb.co/GQYn4Tp/logo.png" height='60' alt=""/>
                <div className="col-md-5 mx-auto mt-2 py-5">
                    <div className="card shadow">
                        <div className="card-body text-center py-5">
                            <h3 className='text-secondary'>Register as a Volunteer</h3>

                            <form action="">
                                <input className='form-control mb-2' type="text" placeholder='Full Name'/>
                                <input className='form-control mb-2' type="text" placeholder='Username/Email'/>
                                <input className='form-control mb-2' type="date" placeholder='Pick Date'/>
                                <input className='form-control mb-2' type="text" placeholder='Description'/>
                                <input className='form-control mb-2' type="text" placeholder='Selected Volunteer'/>
                                <input className='btn btn-block btn-outline-primary' type="submit" value='Register'/>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
)
};

export default ResisterEvent;