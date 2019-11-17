import React from 'react';
import PropTypes from 'prop-types';

export default function Listing({ title }) {
  return <h2>{title}</h2>;
}

Listing.propTypes = {
  title: PropTypes.string.isRequired
};
