import React from 'react';
import PropTypes from 'prop-types';
import './ChatMessage.scss';

const ChatMessage = (props) => {
  const { message } = props;

  const renderMessage = (msg, index) => {
    switch (msg.type) {
    case 'image':
      return <ChatMessageImage key={`${index}-${message.key}`} message={msg} />;
    default:
      return <ChatMessageText key={`${index}-${message.key}`} message={msg} />;
    }
  };

  return (
    <div className="chat-message-container">
      <strong>{message.username}</strong>&nbsp;
      <span>{message.parsedDate}</span>
      <div>
        {renderMessage(message)}
        {message.grouped && message.grouped.map(renderMessage)}
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.object
};

const ChatMessageText = (props) => {
  const { message } = props;
  return (
    <p>
      {message.text}
    </p>
  );
};

ChatMessageText.propTypes = {
  message: PropTypes.object
};

const ChatMessageImage = (props) => {
  const { message } = props;
  return (
    <p>
      <img
        height="200px"
        src={message.url}
        alt={message.alt}
      />
    </p>
  );
};

ChatMessageImage.propTypes = {
  message: PropTypes.object
};

export default ChatMessage;

export {
  ChatMessageText,
  ChatMessageImage
};
