import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as starOutline } from '@fortawesome/free-regular-svg-icons';

// Load static data from file.
// This would be loaded through an API in a production app.
import data from './data/data.json';

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
    <div className="container mx-auto">
      <div className="flex -mx-4 justify-center">
        <div className="w-1/2 results-column px-4">
          <Listing
            title="Property Results"
            properties={results}
            listingButtonText={
              <FontAwesomeIcon
                icon={starOutline}
                className="fill-current text-yellow-500 "
                size="lg"
              />
            }
            listingButtonAction={saveProperty}
          />
        </div>

        <div className="w-1/3 saved-column px-4">
          <Listing
            title="Saved Properties"
            properties={saved}
            listingButtonText={
              <FontAwesomeIcon
                icon={starSolid}
                className="fill-current text-yellow-500 "
                size="lg"
              />
            }
            listingButtonAction={removeSavedProperty}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
