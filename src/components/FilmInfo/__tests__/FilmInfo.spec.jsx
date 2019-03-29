import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FilmInfo from '../index';

const shallow = new ShallowRenderer();
const film = {
  name: 'Captain Marvel',
  genres: ['Drama', 'Comedy'],
  year: '1984',
};

describe('FilmInfo Snapshot', () => {
  test('renders', () => {
    const component = shallow.render(
      <FilmInfo {...film} />,
    );
    expect(component).toMatchSnapshot();
  });
});
