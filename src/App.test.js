import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Check Initial render', () => {
  const { getByText, queryByText } = render(<App />);

  test('renders AddressForm', () => {
    const formHeader = getByText(/find upcoming elections/i);

    expect(formHeader).toBeInTheDocument();
    expect(formHeader).toBeVisible();
  });

  test('does not generate a message', () => {
    const searchElement = queryByText(/searching/i);
    const resultsElement = queryByText(/elections in this area./i);

    expect(searchElement).not.toBeInTheDocument();
    expect(resultsElement).not.toBeInTheDocument();
  });

  test('does not render any election results', () => {
    const descElement = queryByText(/description/i);
    const dateElement = queryByText(/date/i);
    const typeElement = queryByText(/type/i);
    const urlElement = queryByText(/url/i);

    expect(descElement).not.toBeInTheDocument();
    expect(dateElement).not.toBeInTheDocument();
    expect(typeElement).not.toBeInTheDocument();
    expect(urlElement).not.toBeInTheDocument();
  });
});
