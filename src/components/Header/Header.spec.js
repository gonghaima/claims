import React from 'react';
import { StoreContext } from '../../store';
import { initialState } from '../../reducers';
import { render, screen } from '@testing-library/react';
import mockedClaimsData from '../../mocks/claimsData.json';
import Header from './index';

initialState['sourceData'] = mockedClaimsData;

test('Nav with ReactDOM should render successfully', () => {
  render(
    <StoreContext.Provider value={[initialState, () => {}]}>
      <div data-testid="container">
        <Header />
      </div>
    </StoreContext.Provider>
  );
  const containerElement = screen.getByTestId('container');
  expect(containerElement.innerHTML).toContain('header');
});

test('Header in darkMode should render successfully', () => {
  render(
    <StoreContext.Provider
      value={[{ ...initialState, ...{ darkMode: true } }, () => {}]}
    >
      <div data-testid="container">
        <Header />
      </div>
    </StoreContext.Provider>
  );
  const containerElement = screen.getByTestId('container');
  expect(containerElement.innerHTML).toContain('header dark');
});
