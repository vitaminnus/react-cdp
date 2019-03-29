import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetailsPage from '../index';

const shallow = new ShallowRenderer();

const onClick = jest.fn();

describe('MovieDetailsPage Snapshot', () => {
  test('renders', () => {
    const component = shallow.render(
      <MovieDetailsPage onClick={onClick} />,
    );
    expect(component).toMatchSnapshot();
  });
  test('renders isActive', () => {
    const component = shallow.render(
      <MovieDetailsPage isActive onClick={onClick} />,
    );
    expect(component).toMatchSnapshot();
  });
});
