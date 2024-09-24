import { act } from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

test('renders the main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Reward Points Calculator/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders buttons for adding transactions', () => {
  render(<App />);
  const buttonA = screen.getByText(/Add Transaction for Customer A/i);
  const buttonB = screen.getByText(/Add Transaction for Customer B/i);
  const buttonC = screen.getByText(/Add Transaction for Customer C/i);
  expect(buttonA).toBeInTheDocument();
  expect(buttonB).toBeInTheDocument();
  expect(buttonC).toBeInTheDocument();
});
