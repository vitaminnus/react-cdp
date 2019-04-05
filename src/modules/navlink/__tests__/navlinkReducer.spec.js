import reducer from '../navlinkReducer';
import * as actions from '../navlinkActions';
import * as filmsActions from '../../films/filmsActions';
import initialState from '../index';

const mockData = 'popular';

describe('NavLink Reducer', () => {
  it('pushed navigation link', () => {
    expect(reducer(initialState, {
      type: actions.PUSH_NAVIGATION_LINK,
      payload: mockData,
    }))
      .toEqual({
        clickedLink: mockData,
      });
  });
  it('clean films', () => {
    expect(reducer(initialState, filmsActions.cleanFilms()))
      .toEqual({
        clickedLink: '',
      });
  });
  it('without any actions', () => {
    expect(reducer(initialState, {
      type: 'FAKE_ACTION',
    })).toEqual(initialState);
  });
  it('without state', () => {
    expect(reducer(undefined, {
      type: 'FAKE_ACTION',
    })).toEqual(initialState);
  });
});
