import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const UnauthenticatedRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        !isAuthenticated ?
          (
            children
          ) : (
            <Redirect to={{ pathname: '/' }} />
          )
      }
    />
  );
};

UnauthenticatedRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  children: PropTypes.element
};

export default UnauthenticatedRoute;
