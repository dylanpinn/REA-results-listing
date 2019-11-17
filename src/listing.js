import React from 'react';
import PropTypes from 'prop-types';

export default function Listing({ title, properties }) {
  return (
    <div>
      <h2>{title}</h2>

      <ul>
        {properties.map(property => (
          <li key={property.id} data-testid="listing">
            {property.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

Listing.propTypes = {
  title: PropTypes.string.isRequired,
  properties: PropTypes.array.isRequired
};
