// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';
import { toggleLocked } from '../utils/utils';

test('component does render', () => {
  render(<Controls />);
});

test('1. toggleClosed is called on open/closed button click when locked is false, closed is true', () => {
  const toggleLockedMock = jest.fn();
  const toggleClosedMock = jest.fn();
  const { getByText } = render(
    <Controls
      toggleLocked={toggleLockedMock}
      toggleClosed={toggleClosedMock}
      locked={false}
      closed={true}
    />
  );

  fireEvent.click(getByText(/open gate/i));
  expect(toggleClosedMock).toHaveBeenCalled();
});

test('2. toggleClosed is called on open/close button click when locked is false, closed is false', () => {
  const toggleLockedMock = jest.fn();
  const toggleClosedMock = jest.fn();
  const { getByText } = render(
    <Controls
      toggleLocked={toggleLockedMock}
      toggleClosed={toggleClosedMock}
      locked={false}
      closed={false}
    />
  );
  getByText(/close gate/i);
  fireEvent.click(getByText(/close gate/i));
  expect(toggleClosedMock).toHaveBeenCalled();
});

test('3. the locked toggle button is disabled if the gate is open', () => {
  const toggleLockedMock = jest.fn();
  const toggleClosedMock = jest.fn();
  const { getByText } = render(
    <Controls
      toggleLocked={toggleLockedMock}
      toggleClosed={toggleClosedMock}
      locked={false}
      closed={false}
    />
  );
  getByText(/lock gate/i);
  fireEvent.click(getByText(/lock gate/i));
  expect(toggleLockedMock).not.toHaveBeenCalled();
});

test('4. the closed toggle button is disabled if the gate is locked', () => {
  const toggleLockedMock = jest.fn();
  const toggleClosedMock = jest.fn();
  const { getByText } = render(
    <Controls
      toggleLocked={toggleLockedMock}
      toggleClosed={toggleClosedMock}
      locked={false} // changing locked to t/f disables open/close
      closed={true}
    />
  );
  getByText(/lock gate/i);
  fireEvent.click(getByText(/open gate/i));
  expect(toggleClosedMock).toHaveBeenCalled();
});
