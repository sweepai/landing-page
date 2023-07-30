import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory, createHashHistory } from 'history';
import { BrowserRouter, Route } from 'react-router-dom';
import CallToAction from './CallToAction';

describe('CallToAction', () => {
  it('navigates to FlappySweep page when FlappySweep button is clicked', () => {
    const source = createMemoryHistory('/start');
    const history = createHashHistory(source);
    const { getByTestId } = render(
      <BrowserRouter>
        <CallToAction />
      </BrowserRouter>
    );

    fireEvent.click(getByTestId('flappy-sweep-button'));

    expect(history.location.pathname).toBe('/flappysweep');
  });
});