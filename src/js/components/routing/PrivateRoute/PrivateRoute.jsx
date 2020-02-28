import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ?
          (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  children: PropTypes.element
};

export default PrivateRoute;
