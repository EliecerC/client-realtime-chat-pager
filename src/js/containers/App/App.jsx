import React, { Suspense } from 'react';
import {
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
// components
import Loader from 'Components/feedback/Loader/Loader.jsx';
// context
import AuthContext from '../../lib/context/auth/auth-context';
// application routes
import routes from '../../routes';
// application root styles
import '../../../styles/application.scss';

const App = () => {
  const { isAuthenticated } = React.useContext(AuthContext);

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
                <Route.Component />
              </Route.RouteComponent>
            )
          )}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
