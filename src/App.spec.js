import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import App from './App';

test('App with ReactDOM should render successfully', async () => {
  await waitFor(() =>
    render(
      <div data-testid="container">
        <App />
      </div>
    )
  );

  const containerElement = screen.getByTestId('container');
  expect(containerElement.innerHTML).toContain('Swiss Re');
  expect(containerElement).toBeDefined();
  expect(containerElement).toMatchSnapshot();
});
