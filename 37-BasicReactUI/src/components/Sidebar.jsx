import React from "react";
import { Link } from "react-router-dom";
import { Home, User, MessageSquare, Layers, Info, PlusCircle } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="Sidebar  text-dark w-1/5 h-full  shadow-lg md:block hidden ">
      {/* User Profile Section */}
      <div className="user-profile p-6 border-b border-gray-700 flex items-center space-x-3">
        <div className="avatar bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
          JD
        </div>
        <div className="user-info">
          <h3 className="font-medium">USER</h3>
        </div>
      </div>
      
      {/* Navigation Menu */}
      <div className="navigation flex-grow p-4">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/profile/:id" className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200">
                <User className="mr-3 h-5 w-5 text-blue-400" />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200">
                <MessageSquare className="mr-3 h-5 w-5 text-blue-400" />
                <span>Testimonials</span>
              </Link>
            </li>
            <li>
              <Link to="/categories" className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200">
                <Layers className="mr-3 h-5 w-5 text-blue-400" />
                <span>Categories</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200">
                <Home className="mr-3 h-5 w-5 text-blue-400" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200">
                <Info className="mr-3 h-5 w-5 text-blue-400" />
                <span>About</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Create Post Button */}
      <div className="create-post p-6 border-t border-gray-700">
        <button className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          <PlusCircle className="mr-2 h-5 w-5" />
          Create Post
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
