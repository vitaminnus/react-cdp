import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../index';

const renderer = new ShallowRenderer();
const data = {
  type: 'black',
  text: 'View Info',
  onClick: () => ('Hello!'),
};

const blueData = {
  type: 'blue',
  text: 'View Info',
  onClick: () => ('Hello!'),
};

const mainButtonData = {
  type: 'blue',
  text: 'View Info',
  isMain: true,
  onClick: () => ('Hello!'),
};

describe('Button Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <Button {...data} />,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Button blue Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <Button {...blueData} />,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Button blue Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <Button {...mainButtonData} />,
    );
    expect(component).toMatchSnapshot();
  });
});
