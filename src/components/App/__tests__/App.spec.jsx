import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../index';
import Film from '../../Film';
import Button from '../../Button';

Enzyme.configure({ adapter: new Adapter() });

const shallow = new ShallowRenderer();

describe('App Snapshot', () => {
  test('App render', () => {
    const component = shallow.render(
      <App />,
    );
    expect(component).toMatchSnapshot();
  });
});


describe('App logics', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = Enzyme.mount(
      <App />,
    );
  });
  it('click to the film item should open details page', () => {
    wrapper.find(Film).first().prop('onClick')();
    expect(wrapper.state('isActiveDetails')).toEqual(true);
  });
  it('click to the search button should open search page', () => {
    wrapper.find(Film).first().prop('onClick')();
    wrapper.update();
    wrapper.find(Button).prop('onClick')();
    expect(wrapper.state('isActiveSearch')).toEqual(true);
  });
});
