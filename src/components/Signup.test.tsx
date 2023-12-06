import React from 'react';
import { render, screen } from '@testing-library/react';
import Signup from './Signup';

test('renders Signup component and checks form elements', () => {
  render(<Signup />);

  const emailElement = screen.getByLabelText(/Email Address \*/i);
  const firstNameElement = screen.getByLabelText(/First Name/i);
  const subscribeButtonElement = screen.getByText(/Subscribe/i);

  expect(emailElement).toBeInTheDocument();
  expect(firstNameElement).toBeInTheDocument();
  expect(subscribeButtonElement).toBeInTheDocument();
});
