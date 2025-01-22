import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div
      className="search-bar"
    >
      <input
        type="text"
        placeholder="Search for products..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-black"
      />
      
    </div>
  );
};

export default SearchBar;
