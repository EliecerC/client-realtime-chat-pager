import React from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import SocketContext from './socket-context';

function SocketProvider(props) {
  const [error, setError] = React.useState({});
  const [socket, setSocket] = React.useState({});

  const handleConnect = (uri, opts) => {
    const socket = io(uri, opts);
    setSocket(socket);
    return socket;
  };

  React.useEffect(() => {
    return () => {
      if (socket.connected) socket.close();
    };
  }, []);

  React.useEffect(() => {
    if (socket && socket.connected) {
      const errorCallback = event => error => {
        setError({ event, error });
        console.error('event:', event, 'error;', error);
        socket.close();
      };

      socket.on('error', errorCallback('error'));
      socket.on('connect_error', errorCallback('connect_error'));
      socket.on('connect_timeout', errorCallback('connect_timeout'));

      socket.on('disconnect', () => {
        console.log('disconnected');
        setSocket({});
      });
    }
  }, [socket]);

  return (
    <SocketContext.Provider value={{ error, socket, handleConnect }}>
      {props.children}
    </SocketContext.Provider>
  );
}

SocketProvider.propTypes = {
  children: PropTypes.element
};

export default SocketProvider;
