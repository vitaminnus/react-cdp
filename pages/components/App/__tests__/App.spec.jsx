import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../index';

const shallow = new ShallowRenderer();

describe('App Snapshot', () => {
  test('App render', () => {
    const component = shallow.render(
      <App />,
    );
    expect(component).toMatchSnapshot();
  });
});
