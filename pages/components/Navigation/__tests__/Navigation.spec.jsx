import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Testrenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Navigation from '../Navigation';
import NavigationContainer from '../index';

const renderer = new ShallowRenderer();
Enzyme.configure({ adapter: new Adapter() });

const films = [
  {
    id: '1345647456',
    title: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    release_date: '1984-12-03',
  },
  {
    id: '1345678696',
    title: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    release_date: '1984-12-03',
  },
  {
    id: '13324256',
    title: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    release_date: '1984-12-03',
  },
  {
    id: '34613456',
    title: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    release_date: '1984-12-03',
  },
  {
    id: '1378970456',
    title: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    release_date: '1984-12-03',
  },
];

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  films:
    {
      allFilms: films,
    },
  search:
    {
      searchBy: 'title',
      searchedWord: 'terminator',
    },
});
const sortFilms = jest.fn();
const typeOfSearch = 'title';
const searchingWord = 'Terminator';

describe('Navigation Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <Navigation
        films={films}
        sortFilms={sortFilms}
        searchingWord={searchingWord}
        typeOfSearch={typeOfSearch}
      />,
    );
    expect(component).toMatchSnapshot();
  });
  test('with store render', () => {
    const component = Testrenderer.create(
      <Provider store={store}>
        <NavigationContainer />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Navigation links should work', () => {
  it('click to the release_date link should sort array of films', () => {
    const wrapper = shallow(
      <Navigation
        films={films}
        sortFilms={sortFilms}
        searchingWord={searchingWord}
        typeOfSearch={typeOfSearch}
      />,
    );
    const e = {
      target: {
        dataset: {
          sorttype: 'release_date',
        },
      },
    };
    wrapper.find('[data-sorttype="release_date"]').prop('onClick')(e);
    expect(wrapper.state().releaseDateSort).toEqual('ASC');
  });
  it('double click to the release_date link should sort array of films again', () => {
    const wrapper = shallow(
      <Navigation
        films={films}
        sortFilms={sortFilms}
        searchingWord={searchingWord}
        typeOfSearch={typeOfSearch}
      />,
    );
    const e = {
      target: {
        dataset: {
          sorttype: 'release_date',
        },
      },
    };
    wrapper.find('[data-sorttype="release_date"]').prop('onClick')(e);
    wrapper.find('[data-sorttype="release_date"]').prop('onClick')(e);
    expect(wrapper.state().releaseDateSort).toEqual('DESC');
  });
  it('click to the rating link should sort array of films', () => {
    const wrapper = shallow(
      <Navigation
        films={films}
        sortFilms={sortFilms}
        searchingWord={searchingWord}
        typeOfSearch={typeOfSearch}
      />,
    );
    const e = {
      target: {
        dataset: {
          sorttype: 'rating',
        },
      },
    };
    wrapper.find('[data-sorttype="release_date"]').prop('onClick')(e);
    expect(wrapper.state().voteCountSort).toEqual('ASC');
  });
  it('double click to the rating link should sort array of films again', () => {
    const wrapper = shallow(
      <Navigation
        films={films}
        sortFilms={sortFilms}
        searchingWord={searchingWord}
        typeOfSearch={typeOfSearch}
      />,
    );
    const e = {
      target: {
        dataset: {
          sorttype: 'rating',
        },
      },
    };
    wrapper.find('[data-sorttype="release_date"]').prop('onClick')(e);
    wrapper.find('[data-sorttype="release_date"]').prop('onClick')(e);
    expect(wrapper.state().voteCountSort).toEqual('DESC');
  });
});
