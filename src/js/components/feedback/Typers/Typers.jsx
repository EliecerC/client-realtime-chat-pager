import React from 'react';
// context
import SocketContext from 'Lib/context/socket/socket-context';
import AuthContext from 'Lib/context/auth/auth-context';

const Typers = () => {
  const { socket } = React.useContext(SocketContext);
  const { username } = React.useContext(AuthContext);
  const [typers, setTypers] = React.useState(null);

  React.useEffect(() => {
    if (socket && socket.connected) {
      socket.on('is-typing', typers => {
        const filteredTypers = Object
          .keys(typers)
          .filter(typer => typer !== username && typers[typer])
          .map(typer => typer);

        setTypers(filteredTypers);
      });
    }
  }, [socket]);

  if (!typers || !typers.length) return null;

  return (
    <div className="margin-bottom-8 font-size-12">
      {typers.length === 1 ? `${typers[0]} is ` : 'People are ' }
      typing...
    </div>
  );
};

export default Typers;
