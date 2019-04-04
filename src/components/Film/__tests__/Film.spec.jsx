import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import Film from '../index';

const renderer = new ShallowRenderer();

const onClick = jest.fn();

const film = {
  id: '13456',
  name: 'Captain Marvel',
  poster_path: '../../assets/images/poster.jpg',
  genres: ['Drama', 'Comedy'],
  year: '1984',
};

const film2 = {
  id: '13456',
  name: 'Captain Marvel',
  genres: ['Drama', 'Comedy'],
  year: '1984',
};

describe('Film Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <Film {...film} onClick={onClick} />,
    );
    expect(component).toMatchSnapshot();
  });
  test('renders without PosterPath', () => {
    const component = renderer.render(
      <Film {...film2} onClick={onClick} />,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Film lifecycle method componentWillUnmount should have been called', () => {
  test('lifecycle method should have been called', () => {
    const component = TestRenderer.create(
      <Film {...film} onClick={onClick} />,
      {
        createNodeMock: (element) => {
          if (element.props.className === 'container') {
            return {
              addEventListener: () => {},
              removeEventListener: () => {},
            };
          }
          return null;
        },
      },
    );
    component.unmount();
  });
});
