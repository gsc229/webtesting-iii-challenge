// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display';

test('1. component does render', () => {
  const { getByText } = render(<Display locked={true} closed={true} />);
});

test("2. displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {
  const { getByText } = render(<Display locked={false} closed={true} />); //changing either to false fails

  getByText(/closed/i);
  getByText(/locked/i);
});

test("3. displays 'Closed' if the closed prop is true and 'Open' if otherwise displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise", () => {
  const { getByText } = render(<Display locked={true} closed={true} />); //fails when changes to false
  getByText(/Closed/i);
  getByText(/Locked/);
});
