import React from 'react';
import PropTypes from 'prop-types';

export default function Property({ property }) {
  return (
    <div>
      <div>{property.price}</div>
    </div>
  );
}

Property.propTypes = {
  property: PropTypes.shape({
    price: PropTypes.string
  }).isRequired
};
