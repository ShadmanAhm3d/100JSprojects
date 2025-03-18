import React, { useState } from "react";
import { FaUser, FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";
import PhoneModal from "./PhoneModal";

const Cards = ({ user }) => {
  const [isPhonemodal, setIsPhonemodal] = useState(false);

  const modalHandler = () => {
    console.log("handler lcick");

    setIsPhonemodal((prev) => !prev);
    console.log(isPhonemodal);
  };

  return isPhonemodal ? (
    <PhoneModal onClose={modalHandler} />
  ) : (
    <div className="max-w-lg w-1/3 bg-gray-900 text-white p-4 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300">
      {/* Header Section */}
      <div className="flex items-center gap-4">
        {/* User Profile Image */}
        <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
          {user.profileImage ? (
            <img
              src={user.profileImage}
              alt="User"
              className="w-full h-full object-cover"
            />
          ) : (
            <FaUser className="text-gray-400 text-2xl mx-auto mt-3" />
          )}
        </div>

        {/* User Info */}
        <div>
          <h2 className="text-lg font-bold">{user.name}</h2>
          <div className="text-gray-400 text-sm flex gap-2">
            <FaClock className="text-yellow-400" />
            <span>{user.timePosted}</span>
          </div>
        </div>
      </div>

      {/* Service & Location */}
      <div className="mt-3 text-gray-300 flex justify-between text-sm">
        <span className="bg-blue-600 px-3 py-1 rounded-full text-xs">
          {user.serviceType}
        </span>
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-red-400" />
          <span>{user.location}</span>
        </div>
      </div>

      {/* Post Image (If available) */}
      {user.postImage && (
        <div className="mt-4 rounded-lg overflow-hidden">
          <img
            src={user.postImage}
            alt="Post"
            className="w-full h-40 object-cover"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          View Profile
        </button>
        <button
          onClick={modalHandler}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-500 transition"
        >
          <FaPhone /> View Number
        </button>
      </div>
    </div>
  );
};

// Sample user data for testing
const sampleUser = {
  name: "PEWPEW",
  timePosted: "2 hours ago",
  serviceType: "Category",
  location: "Ghazibadh",
  profileImage: "https://picsum.photos/200",
  postImage: "https://picsum.photos/300/300",
};

export default function App() {
  return <Cards user={sampleUser} />;
}
