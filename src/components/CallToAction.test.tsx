import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CallToAction from './CallToAction';

describe('CallToAction', () => {
  test('initial state', () => {
    const { getByTestId } = render(<CallToAction />);
    const button = getByTestId('cta-button');
    expect(button).toHaveTextContent('Click me');
  });

  test('state change', () => {
    const { getByTestId } = render(<CallToAction />);
    const button = getByTestId('cta-button');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Clicked');
  });

  test('render output', () => {
    const { container } = render(<CallToAction />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

