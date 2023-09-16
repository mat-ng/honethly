import React from 'react';

interface props {
  filterSearch: (s: string) => void;
}

const SearchBar: React.FC<props> = ({ filterSearch }) => {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg mt-[7rem] p-4 w-2/3 mx-auto">
      <div className="flex">
      <input
        type="text"
        placeholder="Search for businesses"
        className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
        onChange={e => filterSearch(e.target.value)}
      />
      {/* <button className="bg-blue-500 text-white rounded-full px-4 py-2">
        Search
      </button> */}
      </div>
    </div>
  );
};

export default SearchBar;
