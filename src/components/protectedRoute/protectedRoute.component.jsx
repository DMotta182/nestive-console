import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from '../../utils/auth.js'

const ProtectedRoute = ({
    component: Component,
    ...otherProps
  }) => {
    return (
      <Route
        {...otherProps}
        render={props => {
          if (auth.isAuthenticated()) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    );
  };

export default ProtectedRoute;
  