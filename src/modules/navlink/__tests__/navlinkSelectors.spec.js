import getClickedLink from '../navlinkSelectors';
import initialState from '../index';

describe('NavLink Selectors', () => {
  const state = {
    navlink: initialState,
  };
  it('getClickedLink selector', () => {
    expect(getClickedLink(state))
      .toEqual(state.navlink.clickedLink);
  });
});
