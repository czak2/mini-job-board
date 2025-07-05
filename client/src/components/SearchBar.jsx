import React from "react";
import { IoSearch } from "react-icons/io5";
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for jobs..."
        className="w-full px-4 py-3 pl-10 border border-primary-light bg-primary-light/5 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
      />
      <div className="absolute left-3 top-3.5 text-primary">
        <IoSearch />
      </div>
    </div>
  );
};

export default SearchBar;
