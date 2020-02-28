import React from 'react';
import renderer from 'react-test-renderer';
import Scrollable from './Scrollable.jsx';

/* eslint-disable no-undef */
it('renders without crashing', () => {
  // snapshot
  const scrollable = renderer.create(<Scrollable />).toJSON();
  expect(scrollable).toMatchSnapshot();
});
