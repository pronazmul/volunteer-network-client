import React from 'react'
import Home from './Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom"
import Login from './Login/Login'
import ResisterEvent from './ResisterEvent/ResisterEvent'
import EventTasks from './EventTasks/EventTasks'
import AdminDashboard from './Admin/AdminDashboard'
import AdminAddEvent from './Admin/AdminAddEvent'

const main = () => {
  return (
    <>
      <Router>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/resister'>
            <ResisterEvent></ResisterEvent>
          </Route>

          <Route path='/tasks'>
            <EventTasks></EventTasks>
          </Route>

          <Route path='/adminDashboard'>
            <AdminDashboard></AdminDashboard>
          </Route>
          
          <Route path='/adminAddEvent'>
            <AdminAddEvent></AdminAddEvent>
          </Route>
          
          <Route path='*'>
            <Redirect to="/" />
          </Route>
      </Router>
    </>
  )
}

export default main;