import React, { useState } from "react";

const Search = ({ip,hn,submit_handler}) => {





  return (
    <div className="searchbar text-center">
      <form>
        <div className="p-2">
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            placeholder="EnterHere"
            className="border border-white"
            onChange={hn}
            value={ip}
          />
          <button className="py-2 px-2 bg-violet-700 rounded-lg" onClick={submit_handler}>Search </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
