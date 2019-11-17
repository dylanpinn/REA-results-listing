import React from 'react';
import PropTypes from 'prop-types';

import Property from './property';

export default function Listing({
  title,
  properties,
  listingButtonText,
  listingButtonAction
}) {
  return (
    <div>
      <h2>{title}</h2>

      <div data-testid="listing">
        {properties.map(property => (
          <Property
            key={property.id}
            property={property}
            buttonText={listingButtonText}
            buttonFunc={listingButtonAction}
          />
        ))}
      </div>
    </div>
  );
}

Listing.propTypes = {
  title: PropTypes.string.isRequired,
  properties: PropTypes.array.isRequired,
  listingButtonText: PropTypes.string.isRequired,
  listingButtonAction: PropTypes.func.isRequired
};
