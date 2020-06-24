import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Nav from './';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders', () => {
  const nav = shallow(<Nav />);

  expect(nav.exists()).toBe(true);
});
