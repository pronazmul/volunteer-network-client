import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { loginContexApi } from '../Main';

const PrivateRoute = ({children, ...rest}) => {
    const [loginUser, setLoginUser] = useContext(loginContexApi)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loginUser.isSignIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;