import React from 'react';
import { shallow } from 'enzyme';

import asyncComponent from './AsyncComponent.jsx';

const AsyncMockComponent = asyncComponent(() => import('Components/utils/MockComponent/MockComponent.jsx'));

/* eslint-disable no-undef */
it('renders without crashing', () => {
  shallow(<AsyncMockComponent />);
});
