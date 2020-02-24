import React, { Suspense } from 'react';
import {
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import Loader from 'Components/Loader/Loader.jsx';

import routes from '../../routes';

import '../../../styles/application.scss';

export default function App() {
  const childsProps = { test: 'hola props' };

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          {routes.map((route, i) =>
            (
              <route.RouteComponent
                key={i}
                path={route.path}
                exact={!!route.exact}
              >
                <route.component {...childsProps} />
              </route.RouteComponent>
            )
          )}
        </Switch>
      </Router>
    </Suspense>
  );
}
