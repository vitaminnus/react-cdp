import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieSearchPage from '../index';

Enzyme.configure({ adapter: new Adapter() });
const renderer = new ShallowRenderer();

describe('MovieSearchPage Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <MovieSearchPage />,
    );
    expect(component).toMatchSnapshot();
  });
});
