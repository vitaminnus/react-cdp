import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Testrenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Search from '../Search';
import SearchContainer from '../index';

const renderer = new ShallowRenderer();
Enzyme.configure({ adapter: new Adapter() });

const fetchFilmByRoute = jest.fn();
const searchFilm = jest.fn();
const history = {
  push: jest.fn(),
};

const location = {};
const match = {};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  search:
    {
      searchBy: 'title',
      searchedWord: 'word',
    },
});

describe('Search Snapshot', () => {
  test('render', () => {
    const component = renderer.render(
      <Search
        fetchFilmByRoute={fetchFilmByRoute}
        searchFilm={searchFilm}
        history={history}
        location={location}
        match={match}
      />,
    );
    expect(component).toMatchSnapshot();
  });
  test('with store render', () => {
    const component = Testrenderer.create(
      <Provider store={store}>
        <Router>
          <SearchContainer />
        </Router>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Search clickHandler should work', () => {
  it('click to the search button should call clickHandler', () => {
    const wrapper = shallow(
      <Search
        fetchFilmByRoute={fetchFilmByRoute}
        searchFilm={searchFilm}
        history={history}
        location={location}
        match={match}
      />,
    );
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onClickHandler');
    wrapper.instance().forceUpdate();
    wrapper.find('[text="SEARCH"]').prop('onClick')();
    expect(spy).toHaveBeenCalled();
  });
  it('type the word to the input field should save it in state', () => {
    const mockWord = 'word';
    const e = {
      target: {
        value: mockWord,
      },
    };
    const wrapper = shallow(
      <Search
        fetchFilmByRoute={fetchFilmByRoute}
        searchFilm={searchFilm}
        history={history}
        location={location}
        match={match}
      />,
    );
    wrapper.find('[type="text"]').prop('onChange')(e);
    expect(wrapper.state().word).toEqual(mockWord);
  });
  it('submit after typing search word should call search', () => {
    const mockWord = 'word';
    const e = {
      keyCode: 13,
    };
    const eventMap = {
      keypress: null,
    };
    global.document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });
    const wrapper = Enzyme.mount(
      <Search
        fetchFilmByRoute={fetchFilmByRoute}
        searchFilm={searchFilm}
        history={history}
        location={location}
        match={match}
      />,
    );
    wrapper.setState({ word: mockWord });
    eventMap.keypress(e);
    expect(wrapper.state().word).toEqual('');
  });
  it("submit using no-enter button after typing search word shouldn't call search", () => {
    const mockWord = 'word';
    const e = {
      keyCode: 0,
    };
    const eventMap = {
      keypress: null,
    };
    global.document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });
    const wrapper = Enzyme.mount(
      <Search
        fetchFilmByRoute={fetchFilmByRoute}
        searchFilm={searchFilm}
        history={history}
        location={location}
        match={match}
      />,
    );
    wrapper.setState({ word: mockWord });
    eventMap.keypress(e);
    expect(wrapper.state().word).toEqual(mockWord);
  });
  it("click to the search type button 'genre' should change state", () => {
    const mockType = 'genres';
    const e = {
      target: {
        dataset: {
          attr: mockType,
        },
      },
    };
    const wrapper = Enzyme.mount(
      <Search
        fetchFilmByRoute={fetchFilmByRoute}
        searchFilm={searchFilm}
        history={history}
        location={location}
        match={match}
      />,
    );
    wrapper.find('[data-attr="genres"]').prop('onClick')(e);
    expect(wrapper.state().searchBy).toEqual(mockType);
  });
  test('lifecycle method should have been called', () => {
    const component = Testrenderer.create(
      <Search
        fetchFilmByRoute={fetchFilmByRoute}
        searchFilm={searchFilm}
        history={history}
        location={location}
        match={match}
      />,
    );
    component.unmount();
  });
});
