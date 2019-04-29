import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

const renderer = new ShallowRenderer();
Enzyme.configure({ adapter: new Adapter() });

const showSearchPage = jest.fn();
const fetchAllFilms = jest.fn();

describe('Header Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <Header showSearchPage={showSearchPage} fetchAllFilms={fetchAllFilms} />,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Header clickHandler should works', () => {
  it('click to the logo should call clickHandler', () => {
    const wrapper = shallow(
      <Header showSearchPage={showSearchPage} fetchAllFilms={fetchAllFilms} />,
    );
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onClickHandler');
    wrapper.instance().forceUpdate();
    wrapper.find('.logo').prop('onClick')();
    expect(spy).toHaveBeenCalled();
  });
  it('keyPress to the esc button on logo should call onKeyPressHandler', () => {
    const wrapper = shallow(
      <Header showSearchPage={showSearchPage} fetchAllFilms={fetchAllFilms} />,
    );
    const e = {
      keyCode: 27,
    };
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onKeyPressHandler');
    wrapper.instance().forceUpdate();
    wrapper.find('.logo').prop('onKeyPress')(e);
    expect(spy).toHaveBeenCalled();
  });
  it("keyPress not to the esc button on logo shouldn't call onKeyPressHandler", () => {
    const wrapper = shallow(
      <Header showSearchPage={showSearchPage} fetchAllFilms={fetchAllFilms} />,
    );
    const e = {
      keyCode: 0,
    };
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onKeyPressHandler');
    wrapper.instance().forceUpdate();
    wrapper.find('.logo').prop('onKeyPress')(e);
    expect(spy).toHaveBeenCalled();
  });
});
