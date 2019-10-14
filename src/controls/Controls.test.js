// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('component does render', () => {
  render(<Controls />);
});

test('toggleLocked is callled on button click', () => {
  const toggleLockedMock = jest.fn();
  const toggleClosedMock = jest.fn();
  const { getByText } = render(
    <Controls
      toggleLockedMock={toggleLockedMock}
      toggleClosedMock={toggleClosedMock}
      locked={false}
      closed={true}
    />
  );

  fireEvent.click(getByText(/open gate/i));

  expect(toggleLockedMock).toHaveBeenCalled();
});
