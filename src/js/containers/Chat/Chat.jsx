import React from 'react';
import PropTypes from 'prop-types';

function Chat(props) {
  const { username, socket } = props;

  React.useEffect(() => {
    if (socket && socket.connected) {
      socket.on('message', message => {
        console.log('message:', message);
      });

      socket.on('is-typing', typers => {
        console.log('is-typing:', typers);
      });

      socket.on('user-connected', user => {
        console.log('user-connected:', user);
      });

      socket.on('user-disconnected', user => {
        console.log('user-disconnected:', user);
      });
    }
  }, [socket]);

  return (
    <div className="box margin-top-40 padding-left-right-24 padding-top-24">
      Welcome to the Realtime Chat Pager ChatRoom {username}
    </div>
  );
}

Chat.propTypes = {
  socket: PropTypes.object,
  username: PropTypes.string,
  isAuthenticated: PropTypes.bool
};

export default Chat;
