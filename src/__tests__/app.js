import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

// Disable CSS transitions.
import { config } from 'react-transition-group';
config.disabled = true;

describe('App component', () => {
  it('renders a results property listing', () => {
    const { getByText } = render(<App />);
    const resultsListing = getByText('Results');

    expect(resultsListing).toBeInTheDocument();
  });

  it('renders a saved property listing', () => {
    const { getByText } = render(<App />);
    const resultsListing = getByText('Saved Properties');

    expect(resultsListing).toBeInTheDocument();
  });

  it('can save a property', () => {
    const { container } = render(<App />);
    const resultsWrapper = container.querySelector('.results-column');
    const resultsListing = resultsWrapper.querySelector(
      '[data-testid="listing"]'
    );
    const savedWrapper = container.querySelector('.saved-column');
    const savedListing = savedWrapper.querySelector('[data-testid="listing"]');

    // Assert number of results.
    expect(resultsListing.children.length).toEqual(3);
    expect(savedListing.children.length).toEqual(1);

    // Save a property.
    const resultButton = resultsListing.children[0].querySelector('button');
    userEvent.click(resultButton);

    // Should have the same number of results.
    expect(resultsListing.children.length).toEqual(3);
    // Should be 1 more saved property.
    expect(savedListing.children.length).toEqual(2);
  });

  it('can remove a saved property', () => {
    const { container } = render(<App />);
    const resultsWrapper = container.querySelector('.results-column');
    const resultsListing = resultsWrapper.querySelector(
      '[data-testid="listing"]'
    );
    const savedWrapper = container.querySelector('.saved-column');
    const savedListing = savedWrapper.querySelector('[data-testid="listing"]');

    // Assert number of results.
    expect(resultsListing.children.length).toEqual(3);
    expect(savedListing.children.length).toEqual(1);

    // Remove a saved property.
    const button = savedListing.children[0].querySelector('button');
    userEvent.click(button);

    // Should be 1 less saved property.
    expect(savedListing.children.length).toEqual(0);
    // Should be same amount of results.
    expect(resultsListing.children.length).toEqual(3);
  });

  it('cannot save and already saved property', () => {
    const { container } = render(<App />);
    const resultsWrapper = container.querySelector('.results-column');
    const resultsListing = resultsWrapper.querySelector(
      '[data-testid="listing"]'
    );
    const savedWrapper = container.querySelector('.saved-column');
    const savedListing = savedWrapper.querySelector('[data-testid="listing"]');

    // Assert number of results.
    expect(resultsListing.children.length).toEqual(3);
    expect(savedListing.children.length).toEqual(1);

    // Save a property.
    const resultButton = resultsListing.children[0].querySelector('button');
    userEvent.click(resultButton);

    // Should have the same number of results.
    expect(resultsListing.children.length).toEqual(3);
    // Should be 1 more saved property.
    expect(savedListing.children.length).toEqual(2);

    // Save the same property again.
    userEvent.click(resultButton);

    // Should have the same number of results.
    expect(resultsListing.children.length).toEqual(3);
    // Should have the same number of saved properties.
    expect(savedListing.children.length).toEqual(2);
  });
});
