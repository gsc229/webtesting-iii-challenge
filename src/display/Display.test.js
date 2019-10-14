// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display';
import { getByValue } from 'react-testing-library';

test('component does render', () => {
  const locked = false;
  const closed = false;
  const { getByValue } = render(<Display locked={locked} closed={closed} />);
});
