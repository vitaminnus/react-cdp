import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieList from '../index';

const shallow = new ShallowRenderer();

const onClick = jest.fn();

describe('MovieInfo Snapshot', () => {
  test('render', () => {
    const component = shallow.render(
      <MovieList onClick={onClick} />,
    );
    expect(component).toMatchSnapshot();
  });
});
