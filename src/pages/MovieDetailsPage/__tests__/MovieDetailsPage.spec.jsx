import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Testrenderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MovieDetailsPage from '../MovieDetailsPage';
import MovieDetailsPageContainer from '../index';
import Button from '../../../components/Button';
import films from '../../../modules/mocks/getFilmsMock.json';

const renderer = new ShallowRenderer();
Enzyme.configure({ adapter: new Adapter() });
const film = {
  id: 13456,
  title: 'Captain Marvel',
  poster_path: '../../assets/images/poster.jpg',
  genres: ['Drama', 'Comedy'],
  release_date: '1984-12-03',
  runtime: 150,
  tagline: 'Super movie',
  overview: 'Super movie sdfsfs',
};

const allFilms = films.data;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  film: {
    mainFilm: film,
  },
  films: { allFilms },
});

const match = {
  params: {
    id: 447365,
  },
};

const match1 = {
  params: {
    id: 123,
  },
};

const history = {
  push: jest.fn(),
};
const location = {};
const location2 = {
  search: 'q=rambo&t=title',
};

const fetchFilmByRoute = jest.fn();
const makeMainFilm = jest.fn();

const emptyFilm = {};

describe('MovieDetailsPage Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <MovieDetailsPage
        match={match}
        makeMainFilm={makeMainFilm}
        allFilms={allFilms}
        fetchFilmByRoute={fetchFilmByRoute}
        history={history}
        mainFilm={film}
        location={location}
      />,
    );
    expect(component).toMatchSnapshot();
  });
  test('with store render', () => {
    const component = Testrenderer.create(
      <Provider store={store}>
        <Router>
          <MovieDetailsPageContainer
            match={match}
            location={location}
            history={history}
          />
        </Router>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('MovieDetailsPage handler should work', () => {
  it('click to the search button should call clickHandler and show nothing if mainFilm is empty', () => {
    const wrapper = shallow(
      <MovieDetailsPage
        match={match}
        makeMainFilm={makeMainFilm}
        allFilms={allFilms}
        fetchFilmByRoute={fetchFilmByRoute}
        history={history}
        mainFilm={emptyFilm}
        location={location}
      />,
    );
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onClickHandler');
    wrapper.instance().forceUpdate();
    wrapper.find(Button).prop('onClick')();
    expect(spy).toHaveBeenCalled();
  });
  it('click to the search button should call clickHandler film not found', () => {
    const wrapper = shallow(
      <MovieDetailsPage
        match={match1}
        makeMainFilm={makeMainFilm}
        allFilms={allFilms}
        fetchFilmByRoute={fetchFilmByRoute}
        history={history}
        location={location2}
        mainFilm={emptyFilm}
      />,
    );
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onClickHandler');
    wrapper.instance().forceUpdate();
    wrapper.find(Button).prop('onClick')();
    expect(spy).toHaveBeenCalled();
  });
  it('should make an extra request if URL changed', () => {
    const wrapper = shallow(
      <MovieDetailsPage
        match={match}
        allFilms={allFilms}
        makeMainFilm={makeMainFilm}
        fetchFilmByRoute={fetchFilmByRoute}
        history={history}
        location={location}
        mainFilm={film}
      />,
    );
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'loadMainFilm');
    wrapper.setProps({ match: { params: { id: 777 } } });
    expect(spy).toBeCalled();
  });
  it('should make an extra request if URL not changed', () => {
    const wrapper = shallow(
      <MovieDetailsPage
        match={match}
        allFilms={allFilms}
        makeMainFilm={makeMainFilm}
        fetchFilmByRoute={fetchFilmByRoute}
        history={history}
        location={location}
        mainFilm={film}
      />,
    );
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'loadMainFilm');
    wrapper.setProps(match);
    expect(spy).not.toBeCalled();
  });
});
