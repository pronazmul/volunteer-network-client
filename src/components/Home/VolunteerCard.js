import React, { useEffect, useState } from 'react'
import './Home.css'

const VolunteerCard = () => {
    const [volunteerData, setVolunteerData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allTasks')
            .then(res => res.json())
            .then(data => setVolunteerData(data))
    }, [])
    return (
        <div className='container topSpace'>
            <div className="row">
            {volunteerData.map(data=>
                <div className="col-md-3 px-2 mb-3">
                    <div className="card btn p-0">
                        <img className="card-img-top" src={data.image} height='220' alt=""/>
                            <div className="card-body bg-primary rounded">
                                <p className=" card-title text-center text-light">{data.task}</p>
                            </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default VolunteerCard;