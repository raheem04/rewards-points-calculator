// src/tests/RewardCalculator.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RewardCalculator from '../RewardCalculator';

describe('RewardCalculator', () => {
  beforeEach(() => {
    render(<RewardCalculator />);
  });

  test('renders without crashing', () => {
    const headingElement = screen.getByText(/Reward Points Calculator/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('calculates reward points correctly', () => {
    const input = screen.getByPlaceholderText('Enter amount');
    const button = screen.getByRole('button', { name: /add transaction/i });

    fireEvent.change(input, { target: { value: '150' } });
    fireEvent.click(button);

    // Add your assertion here for the expected behavior after the button is clicked
    // For example, you could check for an updated state or some visual feedback
    expect(input.value).toBe('');
  });
});
