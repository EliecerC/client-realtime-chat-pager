import React from 'react';
import clx from 'classnames';
// components
import Typers from 'Components/feedback/Typers/Typers.jsx';
import Button from 'Components/inputs/Button/Button.jsx';
import TextInput from 'Components/inputs/TextInput/TextInput.jsx';
import List from 'Components/display/List/List.jsx';
import ListItem from 'Components/display/List/ListItem.jsx';
import Avatar from 'Components/display/Avatar/Avatar.jsx';
// context
import SocketContext from '../../lib/context/socket/socket-context';
import AuthContext from '../../lib/context/auth/auth-context';
// hooks
import useInput from '../../lib/hooks/useInput';
// helpers
import { cbSetMessages } from '../../lib/helpers';
// styles
import styles from './chat.scss';

function Chat() {
  const { socket } = React.useContext(SocketContext);
  const { username } = React.useContext(AuthContext);

  const [messages, setMessages] = React.useState([]);

  const { reset, value: message, inputProps: messageProps } = useInput('');

  // TO DO: Fix on "unmount" set typing to false
  React.useEffect(() => {
    return () => socket.emit('typing', false);
  }, []);

  React.useEffect(() => {
    if (socket.connected) socket.emit('typing', !!message);
  }, [message]);

  const handleSendMessage = React.useCallback(e => {
    e.preventDefault();

    if (message) {
      socket.emit('text-message', message);
      reset();
    }
  }, [reset, message]);

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
      <List>
        {
          messages.map(message => (
            <ListItem key={message.time} className="margin-bottom-24">
              <Avatar name={message.username} />
              <div style={{ display: 'inline-block', position: 'absolute' }}>
                <strong>{message.username}</strong>&nbsp;
                <span>{message.parsedDate}</span>
                <p>
                  {
                    message.text
                      .split('\n')
                      .map((item, i) => (
                        <React.Fragment key={`${i}`}>
                          {item}
                          <br />
                        </React.Fragment>
                      ))
                  }
                </p>
              </div>
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
        styles.root,
        'margin-top-40 padding-top-24 padding-left-24 padding-right-24'
      )}
    >
      {renderMessages()}

      {/* TO DO: move this block to component */}
      <form onSubmit={handleSendMessage} className="margin-bottom-8">
        <TextInput
          id="message"
          name="message"
          autoComplete="off"
          placeholder="Message"
          className={styles.input}
          {...messageProps}
        />
        <Button className={styles.messageButton}>
          Send
        </Button>
      </form>

      <Typers socket={socket} username={username} />
    </div>
  );
}

export default Chat;
