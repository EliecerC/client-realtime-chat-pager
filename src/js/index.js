import React from 'react';
import { render } from 'react-dom';

import App from './containers/App/App.jsx';
import SocketProvider from 'Lib/context/socket/socket-provider';
import AuthProvider from 'Lib/context/auth/auth-provider';
import ErrorBoundary from 'Components/utils/ErrorBoundary/ErrorBoundary.jsx';

render(
  <ErrorBoundary>
    <SocketProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SocketProvider>
  </ErrorBoundary>,
  document.getElementById('root')
);
