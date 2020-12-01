import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('HomePage', () => {
  it('Renders HomePage correctly', () => {
    const home = shallow(<Home />);
    expect(home).toMatchSnapshot();
  });
});
