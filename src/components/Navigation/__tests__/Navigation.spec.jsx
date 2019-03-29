import React from 'react';
import TestRenderer from 'react-test-renderer';
import Navigation from '../index';

describe('Navigation Snapshot', () => {
  test('renders', () => {
    const component = TestRenderer.create(
      <Navigation />,
    );
    expect(component).toMatchSnapshot();
  });
});
