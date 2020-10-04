import React, { useContext } from 'react';
import * as firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from './firebaseConfig';
import { loginContexApi } from '../Main';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)

const Login = () => {
    //History Data To Redirect...
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }
    
    const [loginUser, setLoginUser] = useContext(loginContexApi) 

    const provider = new firebase.auth.GoogleAuthProvider()
        const handleSignIn =()=>{
        firebase.auth().signInWithPopup(provider)
        .then(res=> {
          const {displayName, email, photoURL} = res.user
            const userData = {
              isSignIn: true,
              name: displayName,
              email: email,
              photo: photoURL
            }
            setLoginUser(userData)
            history.replace(from)
        })
      }

    return (
            <div className='container'>
                <div className="row mt-5 d-flex flex-column">
                    <img className='d-block mx-auto' src="https://i.ibb.co/GQYn4Tp/logo.png" height='60' alt=""/>
                    <div className="col-md-5 mx-auto mt-4 py-5">
                        <div className="card shadow">
                            <div className="card-body text-center py-5">
                                <h1 className='text-secondary'>Login With</h1>
                                <button onClick={handleSignIn} className='btn btn-outline-primary my-3'> <span className='mr-4'><img height='30' src="https://i.ibb.co/9vjdGtz/google.png" alt=""/></span> Sign in With Google</button>
                                <p className='lead small'>Don't Have An Account? <a href='https://accounts.google.com/'>Create an Account</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login;