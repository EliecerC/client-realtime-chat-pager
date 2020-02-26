import React from 'react';

const AuthContext = React.createContext({
  username: false,
  isAuthenticated: false,
  isAuthenticating: false,
  handleLogin: () => {},
  handleLogout: () => {}
});

export default AuthContext;
