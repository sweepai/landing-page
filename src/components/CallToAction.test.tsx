import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemorySource, createHistory } from 'history';
import { Router } from 'react-router-dom';
import CallToAction from './CallToAction';

describe('CallToAction', () => {
  it('navigates to FlappySweep page when FlappySweep button is clicked', () => {
    const source = createMemorySource('/start');
    const history = createHistory(source);
    const { getByTestId } = render(
      <Router history={history}>
        <CallToAction />
      </Router>
    );

    fireEvent.click(getByTestId('flappy-sweep-button'));

    expect(history.location.pathname).toBe('/flappysweep');
  });
});