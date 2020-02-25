import React, { Suspense } from 'react';
import io from 'socket.io-client';
import {
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
// components
import Loader from 'Components/feedback/Loader/Loader.jsx';
// application routes
import routes from '../../routes';
// application root styles
import '../../../styles/application.scss';

export default function App() {
  const [socket, setSocket] = React.useState(null);
  const [username, setUsername] = React.useState(null);
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const [isAuthenticating, setAuthenticating] = React.useState(false);

  const handleLogin = React.useCallback((username) => {
    setAuthenticating(true);
    const socket = io('https://pager-hiring.herokuapp.com/', { query: { username } });

    socket.on('connect', function() {
      setUsername(username);
      setAuthenticated(true);
      setAuthenticating(false);
    });

    socket.on('connect_error', function(error) {
      console.log('Connect Error:', error);
      setAuthenticating(false);
    });

    socket.on('connect_timeout', function(timeout) {
      console.log('Timeout:', timeout);
      setAuthenticating(false);
    });

    socket.on('error', function(error) {
      console.log('Error:', error);
      setAuthenticating(false);
    });

    setSocket(socket);
  }, [isAuthenticated, isAuthenticating]);

  const childsProps = {
    socket,
    username,
    handleLogin,
    isAuthenticated,
    isAuthenticating
  };

  return (
    <Suspense fallback={<Loader delay={300} />}>
      <Router>
        <Switch>
          {routes.map((Route, i) =>
            (
              <Route.RouteComponent
                key={i}
                path={Route.path}
                exact={!!Route.exact}
                isAuthenticated={isAuthenticated}
              >
                <Route.Component {...childsProps} />
              </Route.RouteComponent>
            )
          )}
        </Switch>
      </Router>
    </Suspense>
  );
}
