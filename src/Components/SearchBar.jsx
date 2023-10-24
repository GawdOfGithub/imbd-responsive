import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { useMainContext } from '../Contexts/MainContext';

export const SearchBar = () => {
  const { searchMode, setSearchMode, search, setSearch } = useMainContext();

  return (
    <div className="flex justify-center w-full">
      <div className="w-5/6 bg-black flex">
        <input
          className="w-full p-2 text-white bg-transparent border-b border-white focus:outline-none"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-black p-2 rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={() => setSearchMode(!searchMode)}
        >
          <ClearIcon className="text-white" />
        </button>
      </div>
    </div>
  );
};
