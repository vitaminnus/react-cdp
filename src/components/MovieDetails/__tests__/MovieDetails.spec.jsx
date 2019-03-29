import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetails from '../index';

const shallow = new ShallowRenderer();
const film = {
  name: 'Captain Marvel',
  genres: ['Drama', 'Comedy'],
  year: '1984',
  posterPath: '../../assets/images/poster.jpg',
  duration: '152 m',
  details: 'lorem lorem',
  description: 'lorem ipsum',
};
const film2 = {
  name: 'Captain Marvel',
  genres: ['Drama', 'Comedy'],
  year: '1984',
  duration: '152 m',
  details: 'lorem lorem',
  description: 'lorem ipsum',
};

describe('MoviDetails Snapshot', () => {
  test('render', () => {
    const component = shallow.render(
      <MovieDetails {...film} />,
    );
    expect(component).toMatchSnapshot();
  });
  test('render without PosterPath', () => {
    const component = shallow.render(
      <MovieDetails {...film2} />,
    );
    expect(component).toMatchSnapshot();
  });
});
