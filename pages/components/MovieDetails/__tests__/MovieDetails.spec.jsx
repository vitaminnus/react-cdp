import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetails from '../index';

const shallow = new ShallowRenderer();
const film = {
  title: 'Captain Marvel',
  poster_path: '../../assets/images/poster.jpg',
  runtime: 152,
  release_date: '2020-12-13',
  tagline: 'lorem lorem',
  overview: 'lorem ipsum',
};
const film2 = {
  title: 'Captain Marvel',
  genres: ['Drama', 'Comedy'],
  release_date: '2020-12-13',
  runtime: 152,
  tagline: 'lorem lorem',
  overview: 'lorem ipsum',
};

const film3 = {
  title: 'Captain Marvel',
  genres: ['Drama', 'Comedy'],
  release_date: '2020-12-13',
  poster_path: '../../assets/images/poster.jpg',
  tagline: 'lorem lorem',
  overview: 'lorem ipsum',
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
  test('render without runtime', () => {
    const component = shallow.render(
      <MovieDetails {...film3} />,
    );
    expect(component).toMatchSnapshot();
  });
});
