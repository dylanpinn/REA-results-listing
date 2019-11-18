import Listing from '.';
import React from 'react';
import { render } from '@testing-library/react';
import propertyBuilder from '../../tests/property-factory';

describe('Listing component', () => {
  it('renders the title', () => {
    const titleTxt = 'THIS IS THE TITLE';
    const { getByText } = render(
      <Listing
        title={titleTxt}
        properties={[]}
        listingButtonText=""
        listingButtonAction={() => null}
      />
    );

    const title = getByText(titleTxt);
    expect(title).toBeInTheDocument();
  });

  it('renders a list of Properties', () => {
    const properties = [
      propertyBuilder(),
      propertyBuilder(),
      propertyBuilder()
    ];
    const { getByTestId } = render(
      <Listing
        title={'Title'}
        properties={properties}
        listingButtonText=""
        listingButtonAction={() => null}
      />
    );

    const listings = getByTestId('listing');
    expect(listings.children.length).toEqual(3);
  });
});
