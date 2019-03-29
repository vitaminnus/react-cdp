import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../index';

const renderer = new ShallowRenderer();

describe('Header Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <Header />,
    );
    expect(component).toMatchSnapshot();
  });
});
