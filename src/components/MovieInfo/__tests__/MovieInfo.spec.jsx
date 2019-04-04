import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieInfo from '../index';

const shallow = new ShallowRenderer();
const onClick = jest.fn();
const films = [
  {
    id: 146,
    name: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    year: '1984',
    poster_path: '../../assets/images/poster.jpg',
  },
];

describe('MovieInfo Snapshot', () => {
  test('render', () => {
    const component = shallow.render(
      <MovieInfo films={films} onClick={onClick} />,
    );
    expect(component).toMatchSnapshot();
  });
});
