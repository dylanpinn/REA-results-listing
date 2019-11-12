import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

function Wrapper() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
