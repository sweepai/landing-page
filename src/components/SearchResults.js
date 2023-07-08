import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map(result => (
        <div key={result.id}>
          <h2>{result.title}</h2>
          <p>{new Date(result.date).toLocaleDateString()}</p>
          {/* Rest of result details */}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;