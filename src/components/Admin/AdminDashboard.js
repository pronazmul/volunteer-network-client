import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'

const AdminDashboard = () => {
const[allUser, setAllUser] = useState([])
    useEffect(()=>{
        fetch('https://blooming-earth-11428.herokuapp.com/allUser')
        .then(res=>res.json())
        .then(data=> setAllUser(data))
    },[])

const deleteTask =(id)=>{
    const deletedId = id
    fetch(`https://blooming-earth-11428.herokuapp.com/deleteTask/${id}`,{method:'DELETE'})
    .then(res=> res.json())
    .then(data=> {
        const existTask = allUser.filter(user =>user._id != deletedId)
        setAllUser(existTask)
    })
}
    return (
        <>
            <div className='container'>
                <div className="row py-3">
                    <div className="col-md-3">
                        <img height='60' src="https://i.ibb.co/GQYn4Tp/logo.png" alt="" />
                    </div>
                    <div className="col-md-9">
                        <h4 className='font-weight-bolder mt-3'>Volunteer register list</h4>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-3 pt-4 pl-5 fullHeight">

                        <ul className="nav flex-column">
                            <li className="nav-item mb-3">
                                <Link className="nav-link font-weight-bold btn btn-outline-primary active" to="/adminDashboard">
                                    <span><img height='30' src="https://i.ibb.co/Jc6ZbLQ/users.png" alt="" /></span>  Volunteer Resister List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link font-weight-bold btn btn-outline-primary" to="/adminAddEvent">
                                    <span><img height='30' src="https://i.ibb.co/fYcgC8L/add.png" alt="" /></span>  Add Event</Link>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-9 fullHeight background py-3">
                        <div className="card shadow h-100 rounded px-3">

                            <table class="table table-hover px-4">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Registration</th>
                                        <th scope="col">Volunteer Taks</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {allUser.map(user=>
                                    <tr key={user._id} >
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.date}</td>
                                        <td>{user.task}</td>
                                        <td><button onClick={()=>deleteTask(user._id)} class='btn btn-danger'><img height='20' src="https://i.ibb.co/MR2ZvS3/trash.png" alt=""/></button></td>                                        
                                    </tr>
                                    )}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;