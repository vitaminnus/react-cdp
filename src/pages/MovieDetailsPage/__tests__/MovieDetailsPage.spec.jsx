import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Testrenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import MovieDetailsPage from '../MovieDetailsPage';
import MovieDetailsPageContainer from '../index';
import Button from '../../../components/Button';

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

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  persistedStore:
    {
      mainFilm: film,
      showSearchPage: false,
    },
});

const showSearchPage = jest.fn();
const mockFunc = { showSearchPage };

describe('MovieDetailsPage Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <MovieDetailsPage isShowSearchPage={false} {...mockFunc} mainFilm={film} />,
    );
    expect(component).toMatchSnapshot();
  });
  test('no render if it is not needed', () => {
    const component = renderer.render(
      <MovieDetailsPage isShowSearchPage {...mockFunc} mainFilm={film} />,
    );
    expect(component).toMatchSnapshot();
  });
  test('with store render', () => {
    const component = Testrenderer.create(
      <Provider store={store}>
        <MovieDetailsPageContainer {...mockFunc} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('MovieDetailsPage handler should work', () => {
  it('click to the search button should call clickHandler', () => {
    const wrapper = shallow(
      <MovieDetailsPage
        showSearchPage={showSearchPage}
        isShowSearchPage={false}
        mainFilm={film}
      />,
    );
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onClickHandler');
    wrapper.instance().forceUpdate();
    wrapper.find(Button).prop('onClick')();
    expect(spy).toHaveBeenCalled();
  });
});
