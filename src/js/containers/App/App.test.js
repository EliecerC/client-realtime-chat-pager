import React from 'react';
import { shallow } from 'enzyme';

import App from './App.jsx';

/* eslint-disable no-undef */
it('renders without crashing', () => {
  shallow(<App />);
});
