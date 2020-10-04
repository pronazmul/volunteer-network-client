import React, { createContext, useState } from 'react'
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
import PrivateRoute from './PrivateRoute/PrivateRoute'

export const loginContexApi = createContext()
const Main = () => {
  const [loginUser, setLoginUser] = useState({ isSignIn: false, name: '', email: '', photo: '' })
  return (
            <loginContexApi.Provider value={[loginUser, setLoginUser]}>
              <Router>
                <Switch>
                      <Route exact path='/'>
                        <Home></Home>
                      </Route>

                      <Route path='/login'>
                        <Login></Login>
                      </Route>

                      <PrivateRoute path='/resister/:key'>
                        <ResisterEvent></ResisterEvent>
                      </PrivateRoute>

                      {/* <Route path='/resister/:key'>
                        <ResisterEvent></ResisterEvent>
                      </Route> */}

                      <PrivateRoute path='/tasks'>
                        <EventTasks></EventTasks>
                      </PrivateRoute>

                      <Route path='/adminDashboard'>
                        <AdminDashboard></AdminDashboard>
                      </Route>

                      <Route path='/adminAddEvent'>
                        <AdminAddEvent></AdminAddEvent>
                      </Route>

                      <Route path='*'>
                        <Redirect to="/" />
                      </Route>
                  </Switch>
              </Router>
            </loginContexApi.Provider>
  )
}

export default Main;