import React from 'react';

const SocketContext = React.createContext({
  error: {},
  socket: {},
  handleConnect: () => {}
});

export default SocketContext;
