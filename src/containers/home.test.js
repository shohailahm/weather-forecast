import { Provider,connect } from 'react-redux';
import { shallow } from 'enzyme';
import React from 'react';
import store from '../store/index';
//  import for the unconnected component.
import {Home}  from './Home.js'; 
// const store={}
describe('HomeContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Provider store={store}><Home/></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});