import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';

describe('App component', () => {
  it('renders a results property listing', () => {
    const { getByText } = render(<App />);
    const resultsListing = getByText('Property Results');

    expect(resultsListing).toBeInTheDocument();
  });

  it('renders a saved property listing', () => {
    const { getByText } = render(<App />);
    const resultsListing = getByText('Saved Properties');

    expect(resultsListing).toBeInTheDocument();
  });
});
