import React from 'react';
import { shallow } from 'enzyme';

import MockComponent from './MockComponent.jsx';

/* eslint-disable no-undef */
it('renders without crashing', () => {
  shallow(<MockComponent />);
});
