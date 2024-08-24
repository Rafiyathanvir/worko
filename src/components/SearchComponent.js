import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-component mb-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by name or industry"
        className="form-control"
      />
      <button onClick={handleSearch} className="btn btn-primary mt-2">Search</button>
    </div>
  );
};

export default SearchComponent;
