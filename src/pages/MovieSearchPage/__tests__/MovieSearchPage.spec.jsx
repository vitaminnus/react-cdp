import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Testrenderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MovieSearchPage from '../MovieSearchPage';
import MovieSearchPageContainer from '../index';

Enzyme.configure({ adapter: new Adapter() });
const renderer = new ShallowRenderer();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  film: {
    showSearchPage: true,
  },
  search: {
    serachedword: 'mockword',
  },
});

describe('MovieSearchPage Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <MovieSearchPage isShowSearchPage={false} />,
    );
    expect(component).toMatchSnapshot();
  });
  test('no render if it is not needed', () => {
    const component = renderer.render(
      <MovieSearchPage isShowSearchPage />,
    );
    expect(component).toMatchSnapshot();
  });
  test('render with store', () => {
    const component = Testrenderer.create(
      <Provider store={store}>
        <Router>
          <MovieSearchPageContainer />
        </Router>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
