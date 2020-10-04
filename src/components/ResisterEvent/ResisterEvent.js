import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import EventTasks from '../EventTasks/EventTasks';
import { loginContexApi } from '../Main';

const ResisterEvent = () => {
    const history = useHistory()
    const [loginUser, setLoginUser] = useContext(loginContexApi)
    const [selectedTask, setSelectedTask] = useState({})
    const {key} = useParams()
    useEffect(()=>{
        fetch(`https://blooming-earth-11428.herokuapp.com/singleTask?id=${key}`)
        .then(res=>res.json())
        .then(data=> setSelectedTask(data))
    },[])
    const handleResister = (event)=>{
        event.preventDefault()
        const date = document.getElementById('date').value
        const description = document.getElementById('description').value
        const userData = {...loginUser,...selectedTask,description:description, date:date}

        fetch("https://blooming-earth-11428.herokuapp.com/userTask",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        .then(res=>res.json())
        .then(data=> history.push('/tasks'))
        
            // window.location.replace('/tasks')  
            // return <Redirect to='/tasks'  />          
        

    }
    return  (
        <div className='container'>
            <div className="row mt-5 d-flex flex-column">
                <img className='d-block mx-auto' src="https://i.ibb.co/GQYn4Tp/logo.png" height='60' alt=""/>
                <div className="col-md-5 mx-auto mt-2 py-5">
                    <div className="card shadow">
                        <div className="card-body text-center py-5">
                            <h3 className='text-secondary'>Register as a Volunteer</h3>

                            <form>
                                <input className='form-control mb-2' value={loginUser.name} type="text" placeholder='Full Name ' disabled/>
                                <input className='form-control mb-2' value={loginUser.email} type="text" placeholder='Username/Email' disabled/>
                                <input className='form-control mb-2' value={selectedTask.task} type="text" placeholder='Selected Volunteer'/>
                                <input className='form-control mb-2' id="date" type="date" placeholder='Pick Date' required/>
                                <textarea  className='form-control mb-2' id="description" placeholder='Description' required></textarea>
                                <input onClick={handleResister} className='btn btn-block btn-outline-primary' type="submit" value='Register'/>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
)
};

export default ResisterEvent;