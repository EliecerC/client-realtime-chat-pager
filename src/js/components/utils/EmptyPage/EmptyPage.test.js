import React from 'react';
import renderer from 'react-test-renderer';
import EmptyPage from './EmptyPage.jsx';

/* eslint-disable no-undef */
it('renders without crashing', () => {
  // snapshot
  const emptyPage = renderer.create(<EmptyPage />).toJSON();
  expect(emptyPage).toMatchSnapshot();
});
