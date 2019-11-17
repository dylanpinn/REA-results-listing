import React from 'react';

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
    <div className="row">
      <div className="results-column">
        <Listing
          title="Property Results"
          properties={results}
          listingButtonText="Save"
          listingButtonAction={saveProperty}
        />
      </div>

      <div className="saved-column">
        <Listing
          title="Saved Properties"
          properties={saved}
          listingButtonText="Remove"
          listingButtonAction={removeSavedProperty}
        />
      </div>
    </div>
  );
}

export default App;
