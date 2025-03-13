import React from "react";
import { useState } from "react";
const Navbar = ({changeThemehandler,dropShow,setDropShow}) => {

  const themes = ["light", "dark", "retro", "cupcake", "dim"];



  return (
    <nav className="h-1/6">
      <div className="h-full bg-red-400 flex items-center justify-end px-12 relative">
        {/* Button to toggle dropdown */}
        <button className="btn" onClick={() => setDropShow((prev) => !prev)}>
          Change Theme
        </button>

        {/* Dropdown - Now positioned correctly */}
        {dropShow && (
          <ul
            className="
                absolute top-full right-0 mt-2 w-52 bg-gray-900 text-white 
                rounded-md shadow-lg z-50 transition-all duration-200 
                transform origin-top scale-100 opacity-100
              "
          >
            {themes.map((theme, index) => (
              <li key={index}>
                <button
                  id={theme}
                  onClick={changeThemehandler}
                  className={`block w-full px-4 py-2 text-left animate-pulse hover:bg-gray-800
                    `}
                >
                  {theme}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
