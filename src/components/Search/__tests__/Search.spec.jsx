import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Search from '../index';

const shallow = new ShallowRenderer();

describe('Search Snapshot', () => {
  test('render', () => {
    const component = shallow.render(
      <Search />,
    );
    expect(component).toMatchSnapshot();
  });
});
