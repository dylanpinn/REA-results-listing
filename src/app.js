import React from 'react';

// Load static data from file.
// This would be loaded through an API in a production app.
import data from './data/data.json';

import Listing from './listing';

function App() {
  const [results, setResults] = React.useState([]);
  const [saved, setSaved] = React.useState([]);

  React.useEffect(() => {
    setResults(data.result);
    setSaved(data.saved);
  }, []);

  return (
    <div className="row">
      <div className="results-column">
        <Listing title="Property Results" properties={results} />
      </div>

      <div className="saved-column">
        <Listing title="Saved Properties" properties={saved} />
      </div>
    </div>
  );
}

export default App;
