import React from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar bg-gray-500 w-1/5 h-screen sticky top-0 left-0">
      <div className="top-feild flex h-1/5 border-b border-sky-50">
        <div className="left h-full w-2/3 bg-red-300">Name of User</div>
        <div className="right h-full w-1/3 bg-pink-400">Icon of User</div>
      </div>
      <div className="mid-field h-3/5 w-full bg-lime-100">
        <div className="items p-12">
          <ul className="flex flex-col gap-12">
            <Link to="/profile">
            <li>View Profile</li>
            </Link>
            <li>Testimonials</li>
            <li>Categories</li>
            <li>SomethingElse</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="bottom-field w-full h-1/5 flex items-center justify-center">
        <div>
          <button className="bg-neutral-900 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Create a POST
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Sidebar;
