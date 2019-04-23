import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Testrenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Search from '../Search';
import SearchContainer from '../index';

const renderer = new ShallowRenderer();
Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  notPersistedStore:
    {
      searchBy: 'title',
      searchedWord: 'word',
    },
});
const searchFilm = jest.fn();

describe('Search Snapshot', () => {
  test('render', () => {
    const component = renderer.render(
      <Search searchFilm={searchFilm} />,
    );
    expect(component).toMatchSnapshot();
  });
  test('with store render', () => {
    const component = Testrenderer.create(
      <Provider store={store}>
        <SearchContainer />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Search clickHandler should work', () => {
  it('click to the search button should clean search field', () => {
    const wrapper = shallow(
      <Search searchFilm={searchFilm} />,
    );
    wrapper.find('[text="SEARCH"]').prop('onClick')();
    expect(wrapper.state().word).toEqual('');
  });
  it('type the word to the input field should save it in state', () => {
    const mockWord = 'word';
    const e = {
      target: {
        value: mockWord,
      },
    };
    const wrapper = shallow(
      <Search searchFilm={searchFilm} />,
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
      <Search searchFilm={searchFilm} />,
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
      <Search searchFilm={searchFilm} />,
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
      <Search searchFilm={searchFilm} />,
    );
    wrapper.find('[data-attr="genres"]').prop('onClick')(e);
    expect(wrapper.state().searchBy).toEqual(mockType);
  });
  test('lifecycle method should have been called', () => {
    const component = Testrenderer.create(
      <Search searchFilm={searchFilm} />,
    );
    component.unmount();
  });
});
