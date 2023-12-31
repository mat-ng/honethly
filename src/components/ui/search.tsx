import React from 'react';

interface props {
  filterSearch: (s: string) => void;
}

const SearchBar: React.FC<props> = ({ filterSearch }) => {
  return (
    <div className=" dark:bg-gray-700 shadow-md  mt-[7rem] p-7 mx-auto w-full bg-black">
      <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search for businesses"
        className="w-2/3 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-600 focus: ring-1 focus:ring-emerald-600 focus:ring-opacity"
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
