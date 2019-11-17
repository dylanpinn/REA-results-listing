import Property from '../property';
import React from 'react';
import { render } from '@testing-library/react';
import propertyBuilder from '../../tests/property-factory';

describe('Property component', () => {
  it('renders the price', () => {
    const property = propertyBuilder();
    const { getByText } = render(<Property property={property} />);

    const price = getByText(property.price);
    expect(price).toBeInTheDocument();
  });
});
