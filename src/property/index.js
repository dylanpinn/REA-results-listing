import React from 'react';
import PropTypes from 'prop-types';

import './property.css';

export default function Property({ property, button }) {
  return (
    <div className="max-w rounded overflow-hidden shadow-md mb-6 property">
      <div
        style={{ backgroundColor: property.agency.brandingColors.primary }}
        data-testid="agency-wrapper"
      >
        <img src={property.agency.logo} alt="Property agency logo" />
      </div>
      <div>
        <img src={property.mainImage} alt="Property main image" />
      </div>
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="text-gray-800 lg:text-lg font-bold font-sans text-base">
          {property.price}
        </div>
        <div>{button ? button(property.id) : null}</div>
      </div>
    </div>
  );
}

Property.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    agency: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      brandingColors: PropTypes.shape({
        primary: PropTypes.string.isRequired
      }).isRequired
    }),
    mainImage: PropTypes.string.isRequired
  }).isRequired,
  button: PropTypes.func
};
