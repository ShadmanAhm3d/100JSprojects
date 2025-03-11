import React from "react";
import { useState } from "react";
const  Navbar = ()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown")) {
      setIsOpen(false);
    }
  };

  useState(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="navbar flex flex-row items-center justify-around border border-white">
      {/* RIGHT */}
      <div className="logo">
        <a className="btn btn-ghost text-5xl">Log0</a>
      </div>

      {/* MID */}
      <div className="mid w-4/12">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full md:w-full"
        />
      </div>

      {/* LEFT */}
      <div className="end">
        <div className="dropdown relative">
          <button
            onClick={toggleDropdown}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 focus:outline-none"
          >
            <img
              alt="User avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </button>
          {isOpen && (
            <ul className="text-lime-900 absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
