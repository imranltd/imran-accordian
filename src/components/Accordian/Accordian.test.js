import React from 'react';
import { shallow, mount } from 'enzyme';
import Accordian from './index';

describe('Accordian', () => {
  const props = {
    clickHandle: jest.fn(),
    details: 'this is a test detail',
    heading: 'This is a test heading',
    id: 'test-id-1',
    isOpen: false,
  };

  const component = shallow(<Accordian {...props} />);
  const heading = 'This is a test heading';
  const detail = 'this is a test detail';


  it('should contain heading', () => {
    const text = component.find('.headingClass');

    expect(text.contains(heading)).toEqual(true);
  });

  it('should contain detail', () => {
    const text = component.find('.detailClass');

    expect(text.contains(detail)).toEqual(true);

    expect(component.contains(detail)).toEqual(true);
  });

  it('isOpen prop', () => {
    const newProps = {
      ...props,
      isOpen: true,
    };

    const componentx = mount(<Accordian {...newProps} />);

    expect(componentx.props().isOpen).toEqual(true);
  });

  it('simulate click', () => {
    const componentx = mount(<Accordian {...props} />);

    componentx.find('.headingClass').at(1).simulate('click');

    expect(props.clickHandle).toHaveBeenCalled();
  });
});
