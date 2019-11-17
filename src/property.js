import React from 'react';
import PropTypes from 'prop-types';

export default function Property({ property }) {
  return (
    <div>
      <div
        style={{ backgroundColor: property.agency.brandingColors.primary }}
        data-testid="agency-wrapper"
      >
        <img src={property.agency.logo} alt="Property agency logo" />
      </div>
      <div>{property.price}</div>
      <div>
        <img src={property.mainImage} alt="Property main image" />
      </div>
    </div>
  );
}

Property.propTypes = {
  property: PropTypes.shape({
    price: PropTypes.string.isRequired,
    agency: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      brandingColors: PropTypes.shape({
        primary: PropTypes.string.isRequired
      }).isRequired
    }),
    mainImage: PropTypes.string.isRequired
  }).isRequired
};
