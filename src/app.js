import React from 'react';

// Load static data from file.
// This would be loaded through an API in a production app.
import data from './data/data.json';

import SolidStar from './icons/star-solid';
import OutlineStar from './icons/star-outline';

import { config } from 'react-transition-group';
config.disabled = true;

import Listing from './listing';

function App() {
  const [results, setResults] = React.useState([]);
  const [saved, setSaved] = React.useState([]);

  React.useEffect(() => {
    setResults(data.results);
    setSaved(data.saved);
  }, []);

  function saveProperty(id, e) {
    e.preventDefault();
    const property = results.filter(result => result.id === id);

    setSaved([...saved, ...property]);
    setResults(results.filter(result => result.id !== id));
  }

  function removeSavedProperty(id, e) {
    e.preventDefault();

    setSaved(saved.filter(result => result.id !== id));
  }

  return (
    <div className="container px-4 sm:mx-auto">
      <div className="flex flex-wrap sm:-mx-4 justify-center">
        <div className="w-full sm:w-2/3 lg:w-1/2 results-column sm:px-4">
          <Listing
            title="Property Results"
            properties={results}
            propertyButton={propertyId => (
              <button
                onClick={e => saveProperty(propertyId, e)}
                aria-label="Save property"
              >
                <OutlineStar className="fill-current text-yellow-500 w-6" />
              </button>
            )}
          />
        </div>

        <div className="w-full sm:w-1/3 saved-column sm:px-4">
          <Listing
            title="Saved Properties"
            properties={saved}
            propertyButton={propertyId => (
              <button
                onClick={e => removeSavedProperty(propertyId, e)}
                aria-label="Remove saved property"
              >
                <SolidStar className="fill-current text-yellow-500 w-6" />
              </button>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
