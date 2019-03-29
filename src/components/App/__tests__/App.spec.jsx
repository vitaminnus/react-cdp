import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../index';

Enzyme.configure({ adapter: new Adapter() });

const shallow = new ShallowRenderer();

describe('App Snapshot', () => {
  test('renders', () => {
    const component = shallow.render(
      <App />,
    );
    expect(component).toMatchSnapshot();
  });
});


describe('App logics', () => {
  it('click to the film item', () => {
    const wrapper = Enzyme.mount(
      <App />,
    );
    wrapper.find('#film').first().simulate('click');
    expect(wrapper.state('isActiveDetails')).toEqual(true);
  });
});
