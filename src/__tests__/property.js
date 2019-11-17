import Property from '../property';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import propertyBuilder from '../../tests/property-factory';

describe('Property component', () => {
  it('renders the price', () => {
    const property = propertyBuilder();
    const { getByText } = render(
      <Property property={property} buttonText="" buttonFunc={() => {}} />
    );

    const price = getByText(property.price);
    expect(price).toBeInTheDocument();
  });

  it('renders the agency logo', () => {
    const property = propertyBuilder();
    const { getByAltText } = render(
      <Property property={property} buttonText="" buttonFunc={() => {}} />
    );

    const price = getByAltText('Property agency logo');
    expect(price).toBeInTheDocument();
  });

  it('renders the agency branding colours', () => {
    const property = propertyBuilder();
    const { getByTestId } = render(
      <Property property={property} buttonText="" buttonFunc={() => {}} />
    );

    const price = getByTestId('agency-wrapper');
    expect(price).toHaveStyle(
      `background-color: ${property.agency.brandingColors.primary}`
    );
  });

  it('renders the main image', () => {
    const property = propertyBuilder();
    const { getByAltText } = render(
      <Property property={property} buttonText="" buttonFunc={() => {}} />
    );

    const price = getByAltText('Property main image');
    expect(price).toBeInTheDocument();
  });

  it('renders the button text', () => {
    const property = propertyBuilder();
    const buttonText = 'BUTTON';
    const { getByText } = render(
      <Property
        property={property}
        buttonText={buttonText}
        buttonFunc={() => {}}
      />
    );

    const button = getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it('attaches the button function', () => {
    const property = propertyBuilder();
    const buttonText = 'BUTTON';
    const buttonFunc = jest.fn();
    const { getByText } = render(
      <Property
        property={property}
        buttonText={buttonText}
        buttonFunc={buttonFunc}
      />
    );

    const button = getByText(buttonText);
    userEvent.click(button);
    expect(buttonFunc).toHaveBeenCalledTimes(1);
  });
});
