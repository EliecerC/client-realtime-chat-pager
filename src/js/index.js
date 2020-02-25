import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App.jsx';
import ErrorBoundary from 'Components/utils/ErrorBoundary/ErrorBoundary.jsx';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
