import React from 'react';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import App from './App';

describe('<App />', () => {
  const data = {
    faqs: [{
      id: 1,
      answer: 'This is an Answer',
      question: 'This is a question',
    }],
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(<App data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with data', () => {
    const wrapper = mount(<App data={data} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match snapshot with no data', () => {
    const wrapper = mount(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
