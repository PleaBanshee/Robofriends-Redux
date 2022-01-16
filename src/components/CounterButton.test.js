import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

describe('Counter increments by one', () => {
  let counter;
  beforeEach(() => {
    counter = shallow(<CounterButton />);
  });

  expect.assertions(2);

  it('The counter increments by one', () => {
    expect(counter.find('button').text()).toBe('Count: 0');
    const incButton = counter.find('button');
    incButton.simulate('click');
    expect(counter.find('button').text()).toBe('Count: 1');
  });
});