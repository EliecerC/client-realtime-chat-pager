import React from 'react';
import { shallow } from 'enzyme';

import Loader from './Loader.jsx';

/* eslint-disable no-undef */
it('renders without crashing', () => {
  shallow(<Loader />);
});
