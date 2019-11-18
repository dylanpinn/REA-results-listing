import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Property from './property';

export default function Listing({ title, properties, propertyButton }) {
  return (
    <>
      <h2 className="font-sans text-2xl font-bold tracking-wide text-gray-900 my-4">
        {title}
      </h2>

      <div data-testid="listing" className="flex flex-wrap justify-center">
        <TransitionGroup component={null}>
          {properties.map((property, i) => (
            <CSSTransition
              classNames="fade"
              timeout={{ exit: 200, enter: 200 }}
              key={i}
            >
              <Property
                key={property.id}
                property={property}
                button={propertyButton}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
}

Listing.propTypes = {
  title: PropTypes.string.isRequired,
  properties: PropTypes.array.isRequired,
  propertyButton: PropTypes.func
};
