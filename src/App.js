import React from 'react';

// Load static data from file.
// This would be loaded through an API in a production app.
import data from './data/data.json';

console.log(data);

function App() {
  const [results, setResults] = React.useState([]);
  const [saved, setSaved] = React.useState([]);

  React.useEffect(() => {
    setResults(data.result);
    setSaved(data.saved);
  }, []);

  return <div>React</div>;
}

export default App;
