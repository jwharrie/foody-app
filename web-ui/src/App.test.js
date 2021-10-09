import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders Home text', () => {
  render(<App />);
  const element = screen.getByText(/Welcome to foody!/i);
  expect(element).toBeInTheDocument();
});
