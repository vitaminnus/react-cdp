import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Film from '../index';

const renderer = new ShallowRenderer();
Enzyme.configure({ adapter: new Adapter() });

const onClick = jest.fn();

const film = {
  film: {
    id: 13456,
    title: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    release_date: '1984-12-03',
  },
};

const film2 = {
  film: {
    id: 13456,
    title: 'Captain Marvel',
    genres: ['Drama', 'Comedy'],
    release_date: '1984-05-12',
  },
};

describe('Film Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <Film {...film} onClick={onClick} />,
    );
    expect(component).toMatchSnapshot();
  });
  test('renders without PosterPath', () => {
    const component = renderer.render(
      <Film {...film2} onClick={onClick} />,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Film clickHandler should works', () => {
  it('click to the film should call clickHandler', () => {
    const wrapper = shallow(
      <Film {...film} onClick={onClick} />,
    );
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onClickHandler');
    wrapper.instance().forceUpdate();
    wrapper.find('.container').prop('onClick')();
    expect(spy).toHaveBeenCalled();
  });
  it('keyPress to the enter button on film should call onKeyPressHandler', () => {
    const wrapper = shallow(
      <Film {...film} onClick={onClick} />,
    );
    const e = {
      keyCode: 13,
    };
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onKeyPressHandler');
    wrapper.instance().forceUpdate();
    wrapper.find('.container').prop('onKeyPress')(e);
    expect(spy).toHaveBeenCalled();
  });
  it("keyPress not to the enter button on film shouldn't call onKeyPressHandler", () => {
    const wrapper = shallow(
      <Film {...film} onClick={onClick} />,
    );
    const e = {
      keyCode: 0,
    };
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onKeyPressHandler');
    wrapper.instance().forceUpdate();
    wrapper.find('.container').prop('onKeyPress')(e);
    expect(spy).toHaveBeenCalled();
  });
});
