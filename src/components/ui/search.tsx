import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg mt-[7rem] p-4 w-2/3 mx-auto">
      <div className="flex">
      <input
        type="text"
        placeholder="Search for businesses"
        className="w-11/12 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button className="bg-blue-500 text-white rounded-full px-4 py-2">
        Search
      </button>
      </div>
    </div>
  );
};

export default SearchBar;
