import React from 'react';

interface props {
  filterSearch: (s: string) => void;
}

const SearchBar: React.FC<props> = ({ filterSearch }) => {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md  mt-[7rem] p-7 w-2/3 mx-auto w-full bg-black">
      <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search for businesses"
        className="w-2/3 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
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
