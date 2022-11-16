import React from 'react';
import { StoreContext } from '../../store';
import { initialState } from '../../reducers';
import { render, screen } from '@testing-library/react';
import SearchText from './SearchText';

test('SearchText with ReactDOM should render successfully', () => {
  render(
    <StoreContext.Provider value={[{ initialState }, () => {}]}>
      <div data-testid="container">
        <SearchText />
      </div>
    </StoreContext.Provider>
  );
  const containerElement = screen.getByTestId('container');

  expect(containerElement).toBeInTheDocument;
  expect(containerElement.innerHTML).toContain('searchInput');
});
