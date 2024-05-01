
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import CountryList from './CountryList';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <h1>My Application</h1>
        <CountryList />
      </div>
    </ErrorBoundary>
  );
}

export default App;
