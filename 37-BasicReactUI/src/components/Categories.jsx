import React from "react";
import { Wrench, Zap, Paintbrush, Car, Home, Scissors, Bath, Laptop } from "lucide-react";

const categories = [
  { name: "Plumbing", icon: <Wrench className="w-4 h-4" /> },
  { name: "Electrical", icon: <Zap className="w-4 h-4" /> },
  { name: "Painting", icon: <Paintbrush className="w-4 h-4" /> },
  { name: "Automotive", icon: <Car className="w-4 h-4" /> },
  { name: "Home Repair", icon: <Home className="w-4 h-4" /> },
  { name: "Salon", icon: <Scissors className="w-4 h-4" /> },
  { name: "Cleaning", icon: <Bath className="w-4 h-4" /> },
  { name: "IT Services", icon: <Laptop className="w-4 h-4" /> },
];

const Categories = () => {
  return (
    <div className="w-full px-2 py-4 bg-white border border-black hidden md:block ">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group"
          >
            <div className="mb-2 text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
              {category.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors duration-200">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
