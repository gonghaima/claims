import React from 'react';
import { StoreContext } from '../../store';
import { initialState } from '../../reducers';
import { render, screen } from '@testing-library/react';
import mockedClaimsData from '../../mocks/claimsData.json';
import Nav from './index';

initialState['sourceData'] = mockedClaimsData;
test('Nav with ReactDOM should render successfully', () => {
  render(
    <StoreContext.Provider value={[initialState, () => {}]}>
      <div data-testid="container">
        <Nav />
      </div>
    </StoreContext.Provider>
  );
  const containerElement = screen.getByTestId('container');
  expect(containerElement.innerHTML).toContain('nav');
});

test('Nav with ReactDOM in darkMode should render successfully', () => {
  render(
    <StoreContext.Provider
      value={[{ ...initialState, ...{ darkMode: true } }, () => {}]}
    >
      <div data-testid="container">
        <Nav />
      </div>
    </StoreContext.Provider>
  );
  const containerElement = screen.getByTestId('container');
  expect(containerElement.innerHTML).toContain('nav dark');
});
