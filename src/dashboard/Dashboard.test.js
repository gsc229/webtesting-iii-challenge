// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

test('component does render', () => {
  render(<Dashboard />);
});

test('2. shows the controls and display', () => {
  const { getByTestId } = render(<Dashboard />);

  const elem = getByTestId('controls');
  expect(elem).toBeTruthy();
});
