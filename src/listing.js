import React from 'react';
import PropTypes from 'prop-types';

import Property from './property';

export default function Listing({ title, properties, propertyButton }) {
  return (
    <>
      <h2 className="font-sans text-2xl font-bold tracking-wide text-gray-900 my-4">
        {title}
      </h2>

      <div data-testid="listing" className="flex flex-wrap justify-center">
        {properties.map(property => (
          <Property
            key={property.id}
            property={property}
            button={propertyButton}
          />
        ))}
      </div>
    </>
  );
}

Listing.propTypes = {
  title: PropTypes.string.isRequired,
  properties: PropTypes.array.isRequired,
  propertyButton: PropTypes.func
};
