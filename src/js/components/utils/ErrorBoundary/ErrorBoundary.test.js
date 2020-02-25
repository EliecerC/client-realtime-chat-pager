import React from 'react';
import renderer from 'react-test-renderer';

import ErrorBoundary from './ErrorBoundary.jsx';

/* eslint-disable no-undef */
it('renders without crashing', () => {
  // snapshot
  const errorBoundary = renderer.create(
    <ErrorBoundary>
      <div>error boundary</div>
    </ErrorBoundary>
  ).toJSON();
  expect(errorBoundary).toMatchSnapshot();
});
