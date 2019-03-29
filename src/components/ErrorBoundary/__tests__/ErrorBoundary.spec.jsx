import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorBoundary from '../index';

Enzyme.configure({ adapter: new Adapter() });

const shallow = new ShallowRenderer();

const Child = () => {
  throw new Error();
};

const pauseErrorLogging = (codeToRun) => {
  const logger = console.error;
  console.error = () => {};
  codeToRun();
  console.error = logger;
};

describe('ErrorBoundary Snapshot', () => {
  test('renders', () => {
    const component = shallow.render(
      <ErrorBoundary>
        <h2>Hello World!</h2>
      </ErrorBoundary>,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('ErrorBoundary error emit', () => {
  it('catches error and renders message', () => {
    pauseErrorLogging(() => {
      const wrapper = Enzyme.mount(
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>,
      );
      expect(wrapper.text().match(/Something went wrong.Error/)[0]).toEqual('Something went wrong.Error');
    });
  });
});
