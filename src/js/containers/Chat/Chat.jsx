import React from 'react';
import PropTypes from 'prop-types';

function Chat(props) {
  return (
    <h1 className="font-size-24">
      Hello World from Realtime Chat Pager ChatRoom {props.test}
    </h1>
  );
}

Chat.propTypes = {
  test: PropTypes.string
};

export default Chat;
