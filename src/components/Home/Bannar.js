import React from 'react'
import './Home.css'

const Bannar = () => {
    return (
        <div className="container-fluid bannar d-flex flex-column align-items-center justify-content-center">
            <h2 className='display-4 font-weight-bolder'>I grow by helping people in need</h2>

            <div className="input-group w-25 mx-auto mt-3">
                <input type="text" className="form-control py-3" placeholder="Search...."/>
                    <div className="input-group-append">
                        <button className=' btn btn-success'>Search</button>
                    </div>
            </div>

            </div>
    );
};

export default Bannar;

