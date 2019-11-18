import React from 'react';
import PropTypes from 'prop-types';

export default function Property({ property, buttonText, buttonFunc }) {
  return (
    <div className="max-w rounded overflow-hidden shadow-lg mb-6">
      <div
        style={{ backgroundColor: property.agency.brandingColors.primary }}
        data-testid="agency-wrapper"
      >
        <img src={property.agency.logo} alt="Property agency logo" />
      </div>
      <div>
        <img src={property.mainImage} alt="Property main image" />
      </div>
      <div className="px-6 py-2 flex items-center justify-between">
        <div className="text-gray-800 font-bold font-sans text-base">
          {property.price}
        </div>
        <div>
          <button className="btn" onClick={e => buttonFunc(property.id, e)}>
            {buttonText}
          </button>
        </div>
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
  buttonText: PropTypes.string.isRequired,
  buttonFunc: PropTypes.func.isRequired
};
