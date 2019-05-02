import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signature from '../index';

const renderer = new ShallowRenderer();

describe('Signature Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <Signature />,
    );
    expect(component).toMatchSnapshot();
  });
});
