import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Film from '../Film';

const renderer = new ShallowRenderer();
Enzyme.configure({ adapter: new Adapter() });

const location = {
  search: '',
  pathname: '/',
};

const onClick = jest.fn();
const onKeyPress = jest.fn();

const history = {
  push: () => {},
};

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

describe('Film Snapshots', () => {
  test('render only component', () => {
    const component = renderer.render(
      <Film {...film} onClick={onClick} />,
    );
    expect(component).toMatchSnapshot();
  });
  test('render component without PosterPath', () => {
    const component = renderer.render(
      <Film {...film2} onClick={onClick} />,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Film clickHandler should works', () => {
  it('click to the film should call clickHandler', () => {
    const wrapper = shallow(
      <Film {...film} history={history} />,
    );
    const instance = wrapper.instance();
    instance.onClickHandler = jest.fn();
    instance.forceUpdate();
    wrapper.find('.container').prop('onClick')();
    expect(instance.onClickHandler).toHaveBeenCalled();
  });
  it('keyPress to the enter button on film should call onKeyPressHandler', () => {
    const wrapper = shallow(
      <Film {...film} history={history} location={location} />,
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
      <Film {...film} onKeyPress={onKeyPress} />,
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
