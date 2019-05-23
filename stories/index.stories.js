import React from 'react';

import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { linkTo } from '@storybook/addon-links'; // eslint-disable-line import/no-extraneous-dependencies

import { Welcome } from '@storybook/react/demo'; // eslint-disable-line import/no-extraneous-dependencies
import Button from '../src/components/Button'; // eslint-disable-line import/no-extraneous-dependencies

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('main red button', () => (
    <Button
      isMain
      text="Main button"
      type="red"
    />
  ))
  .add('main black button', () => (
    <Button
      isMain
      text="Main button"
      type="black"
    />
  ))
  .add('main white button', () => (
    <Button
      isMain
      text="Main button"
      type="white"
    />
  ))
  .add('regular red button', () => (
    <Button
      text="button"
      type="red"
    />
  ))
  .add('regular black button', () => (
    <Button
      text="button"
      type="black"
    />
  ))
  .add('regular white button', () => (
    <Button
      text="button"
      type="white"
    />
  ));
