import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file
import Search from '../../images/search.svg';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Add your search logic here
    console.log('Search clicked:', searchTerm);

    // You can perform actions like fetching data based on searchTerm
  };

  return (
    <>
    <br></br>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for items or shops"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <button type="button" onClick={handleSearchClick}>
        <img src={Search} alt="Search" />
      </button>
    </div>
    </>
  );
};

export default SearchBar;
