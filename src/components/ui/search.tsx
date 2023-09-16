import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="relative bg-white dark:bg-gray-700 shadow-md rounded-lg mt-[-2rem] p-4 w-2/3 mx-auto">
      <input
        type="text"
        placeholder="Search for businesses"
        className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full px-4 py-2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
