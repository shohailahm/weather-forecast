import React from 'react';
import { shallow } from 'enzyme';
import ArrBtn from './ArrBtn.js';

describe('ArrowButton', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<ArrBtn />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
  });

  it('disables the button element', () => {
    const wrapper = shallow(<ArrBtn />);
    const buttonElement = wrapper.find('.Left');
    expect(buttonElement.props('showLeft').item).toBe(true);
  
  });
  
//   it('does not render the button element when [certain state is true]', () => {
//    });

// describe('BaseButton', () => {
//     describe('when user clicks button', () => {
//       it ('calls correct function to save the information', () => {
//         const onButtonClickMock = jest.fn();
//         const wrapper = shallow(
//           <ArrBtn
//             onButtonClick={onButtonClickMock}
//           />,
//         );
//         const buttonElement = wrapper.find('.Right'); // step 1 above
//         buttonElement.simulate('click'); // step 2
        
//         expect(onButtonClickMock).toHaveBeenCalledTimes(1); // step 3
//         expect(onButtonClickMock).toHaveBeenCalledWith(true);
//       });
//     });
//   });