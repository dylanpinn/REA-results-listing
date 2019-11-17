import React from 'react';
import PropTypes from 'prop-types';

import Property from './property';

export default function Listing({ title, properties }) {
  return (
    <div>
      <h2>{title}</h2>

      <div data-testid="listing">
        {properties.map(property => (
          <Property
            key={property.id}
            property={property}
            buttonText=""
            buttonFunc={() => null}
          />
        ))}
      </div>
    </div>
  );
}

Listing.propTypes = {
  title: PropTypes.string.isRequired,
  properties: PropTypes.array.isRequired
};
