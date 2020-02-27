import React from 'react';
import clx from 'classnames';
// components
import ChatMessage from 'Components/display/ChatMessage/ChatMessage.jsx';
import Typers from 'Components/feedback/Typers/Typers.jsx';
import Button from 'Components/inputs/Button/Button.jsx';
import TextInput from 'Components/inputs/TextInput/TextInput.jsx';
import List, { ListItem } from 'Components/display/List/List.jsx';
import Avatar from 'Components/display/Avatar/Avatar.jsx';
import GiphySearch from 'Components/utils/GiphySearch/GiphySearch.jsx';
// context
import SocketContext from '../../lib/context/socket/socket-context';
import AuthContext from '../../lib/context/auth/auth-context';
// hooks
import useInput from '../../lib/hooks/useInput';
// helpers
import { cbSetMessages } from '../../lib/helpers';
// styles
import './Chat.scss';

function Chat() {
  const { socket } = React.useContext(SocketContext);
  const { username } = React.useContext(AuthContext);

  const [messages, setMessages] = React.useState([]);

  const { reset, value: message, inputProps: messageProps } = useInput('');

  const giphyQuery = React.useMemo(() => {
    const indexOfPrefix = message.indexOf('/gif ');
    if (indexOfPrefix > -1) {
      return message.slice(indexOfPrefix + 5);
    }
  }, [message]);

  // TO DO: Fix on "unmount" set typing to false
  React.useEffect(() => {
    return () => socket.emit('typing', false);
  }, []);

  React.useEffect(() => {
    if (socket.connected) socket.emit('typing', !!message);
  }, [message]);

  const handleSendTextMessage = React.useCallback(async e => {
    e.preventDefault();

    if (message) {
      socket.emit('text-message', message);
      reset();
    }
  }, [reset, message]);

  const handleSendImageMessage = React.useCallback(({ url, alt }) => {
    if (url) {
      socket.emit('image-message', { alt, url });
      reset();
    }
  }, []);

  React.useEffect(() => {
    if (socket.connected) {
      socket.on('message', message => {
        console.log('message:', message);
        setMessages(cbSetMessages(message));
      });

      socket.on('user-connected', user => {
        console.log('user-connected:', user);
      });

      socket.on('user-disconnected', user => {
        console.log('user-disconnected:', user);
      });
    }
  }, [socket]);

  const renderMessages = React.useCallback(() => {
    return (
      <List style={{ minHeight: '40px' }}>
        {
          messages.map(message => (
            <ListItem key={message.time} className="margin-bottom-24">
              <Avatar name={message.username} />
              <ChatMessage message={message} />
            </ListItem>
          ))
        }
      </List>
    );
  }, [messages]);

  return (
    <div
      className={clx(
        'box',
        'chat-container',
        'margin-top-40 padding-top-24 padding-left-24 padding-right-24'
      )}
    >
      {renderMessages()}

      {/* TO DO: move this block to component */}
      <form onSubmit={handleSendTextMessage} className="margin-bottom-8">
        <TextInput
          id="message"
          name="message"
          autoComplete="off"
          placeholder="Message"
          className="input"
          {...messageProps}
        />
        <Button className="message-button">
          Send
        </Button>
      </form>

      <GiphySearch
        query={giphyQuery}
        onSelect={handleSendImageMessage}
      />

      <Typers socket={socket} username={username} />
    </div>
  );
}

export default Chat;
