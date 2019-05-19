import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<Home />).dive();
    });
});