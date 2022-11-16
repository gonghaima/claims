import React from 'react';
import { StoreContext } from '../../store';
import { initialState } from '../../reducers';
import SubHeader from './index';
import { render, screen } from '@testing-library/react';

test('Subheader with ReactDOM in standard mode should render successfully', () => {
  render(
    <StoreContext.Provider
      value={[{ ...initialState, ...{ showMenu: false } }, () => {}]}
    >
      <div data-testid="container">
        <SubHeader />
      </div>
    </StoreContext.Provider>
  );
  const containerElement = screen.getByTestId('container');
  expect(containerElement.innerHTML).toContain('hide');
});
test('Subheader with ReactDOM in darkMode should render successfully', () => {
  render(
    <StoreContext.Provider
      value={[{ ...initialState, ...{ darkMode: true } }, () => {}]}
    >
      <div data-testid="container">
        <SubHeader />
      </div>
    </StoreContext.Provider>
  );
  const darkSubHeader = screen.getByTestId('container').querySelector('.dark');
  expect(darkSubHeader).toBeInTheDocument;
});
