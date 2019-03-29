import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieSearchPage from '../index';

const shallow = new ShallowRenderer();

describe('MovieSearchPage Snapshot', () => {
  test('renders', () => {
    const component = shallow.render(
      <MovieSearchPage />,
    );
    expect(component).toMatchSnapshot();
  });
  test('renders isActive', () => {
    const component = shallow.render(
      <MovieSearchPage isActive />,
    );
    expect(component).toMatchSnapshot();
  });
});
