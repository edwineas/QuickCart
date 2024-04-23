
import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file
import Search from '../../images/search.svg';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <>
      <br></br>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for items"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </>
  );
};

export default SearchBar;