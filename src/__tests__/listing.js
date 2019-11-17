import Listing from '../listing';
import React from 'react';
import { render } from '@testing-library/react';
import propertyBuilder from '../../tests/property-factory';

describe('Listing component', () => {
  it('renders the title', () => {
    const titleTxt = 'THIS IS THE TITLE';
    const { getByText } = render(<Listing title={titleTxt} properties={[]} />);

    const title = getByText(titleTxt);
    expect(title).toBeInTheDocument();
  });

  it('renders a list of Properties', () => {
    const properties = [
      propertyBuilder(),
      propertyBuilder(),
      propertyBuilder()
    ];
    const { getAllByTestId } = render(
      <Listing title={'Title'} properties={properties} />
    );

    const listings = getAllByTestId('listing');
    expect(listings.length).toEqual(3);
  });
});
