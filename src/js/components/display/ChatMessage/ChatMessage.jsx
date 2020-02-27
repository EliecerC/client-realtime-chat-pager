import React from 'react';
import PropTypes from 'prop-types';
import './ChatMessage.scss';

function ChatMessage(props) {
  const { message } = props;

  const renderMessage = (msg) => {
    switch (msg.type) {
    case 'image':
      return <ChatMessageImage message={msg} />;
    default:
      return <ChatMessageText message={msg} />;
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
}

ChatMessage.propTypes = {
  message: PropTypes.object
};

function ChatMessageText(props) {
  const { message } = props;
  return (
    <p>
      {message.text}
    </p>
  );
}

ChatMessageText.propTypes = {
  message: PropTypes.object
};

function ChatMessageImage(props) {
  const { message } = props;
  return (
    <p>
      <img src={message.url} alt={message.alt} />
    </p>
  );
}

ChatMessageImage.propTypes = {
  message: PropTypes.object
};

export default ChatMessage;

export {
  ChatMessageText,
  ChatMessageImage
};
