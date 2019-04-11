import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Testrenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import MovieInfoContainer from '../index';
import MovieInfo from '../MovieInfo';
import Film from '../../Film';

const renderer = new ShallowRenderer();
Enzyme.configure({ adapter: new Adapter() });
const films = [
  {
    id: 353463654,
    title: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    release_date: '1984-12-03',
    runtime: 150,
    tagline: 'Super movie',
    overview: 'Super movie sdfsfs',
  },
  {
    id: 4676898,
    title: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    release_date: '1984-12-03',
    runtime: 150,
    tagline: 'Super movie',
    overview: 'Super movie sdfsfs',
  },
  {
    id: 23141515,
    title: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    release_date: '1984-12-03',
    runtime: 150,
    tagline: 'Super movie',
    overview: 'Super movie sdfsfs',
  },
  {
    id: 9068756,
    title: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    release_date: '1984-12-03',
    runtime: 150,
    tagline: 'Super movie',
    overview: 'Super movie sdfsfs',
  },
  {
    id: 133453456,
    title: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    release_date: '1984-12-03',
    runtime: 150,
    tagline: 'Super movie',
    overview: 'Super movie sdfsfs',
  },
];
const fetchAllFilms = jest.fn();
const makeMainFilm = jest.fn();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ persistedStore: { allFilms: films } });

describe('MovieInfo Snapshot', () => {
  test('render', () => {
    const component = renderer.render(
      <MovieInfo
        films={films}
        makeMainFilm={makeMainFilm}
        fetchAllFilms={fetchAllFilms}
      />,
    );
    expect(component).toMatchSnapshot();
  });
  test('with store render', () => {
    const component = Testrenderer.create(
      <Provider store={store}>
        <MovieInfoContainer />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('MovieInfo clickHandler should work', () => {
  it('click to the film should call clickHandler', () => {
    const wrapper = shallow(
      <MovieInfo
        films={films}
        makeMainFilm={makeMainFilm}
        fetchAllFilms={fetchAllFilms}
      />,
    );
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onClickHandler');
    instance.forceUpdate();
    wrapper.find(Film).first().prop('onClick')();
    expect(spy).toHaveBeenCalled();
  });
});
