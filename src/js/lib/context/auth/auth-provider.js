import React from 'react';
import PropTypes from 'prop-types';
import AuthContext from './auth-context';
import SocketContext from '../socket/socket-context';

// TO DO: Add support for env variables
const SOCKET_BASE_URI = 'https://pager-hiring.herokuapp.com/';

function AuthProvider(props) {
  const { handleConnect } = React.useContext(SocketContext);

  const [username, setUsername] = React.useState(null);
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const [isAuthenticating, setAuthenticating] = React.useState(false);

  const handleLogin = (username) => {
    setAuthenticating(true);
    const socket = handleConnect(SOCKET_BASE_URI, { query: { username } });

    socket.once('connect', () => {
      setUsername(username);
      setAuthenticated(true);
      setAuthenticating(false);
    });
  };

  const handleLogout = () => {
    setUsername(null);
    setAuthenticated(false);
    setAuthenticating(false);
  };

  return (
    <AuthContext.Provider value={{
      username,
      isAuthenticated,
      isAuthenticating,
      handleLogin,
      handleLogout
    }}>
      {props.children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element
};

export default AuthProvider;
