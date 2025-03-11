import React, { useState } from "react";
import { User, MapPin, Briefcase, Calendar, Mail, Phone, Edit, Save, Camera } from "lucide-react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Neon Cyber",
    age: 28,
    email: "cyberpunk@example.com",
    phone: "91798682374",
    address: "Night City, Sector 7",
    serviceType: "Hacker & Designer",
    bio: "Cybernetic artist and hacker, blending digital and analog aesthetics to create immersive designs."
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <div className="min-h-screen bg-black text-white p-6 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-gray-900 rounded-2xl shadow-xl border border-neon-green p-8 relative">
        {/* Profile Header */}
        <div className="relative h-48 w-full bg-gradient-to-r from-neon-blue to-neon-pink rounded-t-2xl flex justify-center items-center">
          <h1 className="text-4xl font-bold tracking-wide text-white neon-glow">Profile</h1>
        </div>

        {/* Profile Image */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 border-4 border-neon-green rounded-full overflow-hidden shadow-lg">
          <img
            src="https://source.unsplash.com/100x100/?cyberpunk,avatar"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Details */}
        <div className="mt-20 space-y-4 text-center">
          <h2 className="text-2xl font-bold text-neon-green">{profileData.name}</h2>
          <p className="text-neon-pink">{profileData.serviceType}</p>
        </div>

        {/* Contact Info */}
        <div className="mt-6 grid grid-cols-2 gap-6 text-center text-gray-300">
          <div className="flex flex-col items-center">
            <Mail className="text-neon-blue" />
            <p>{profileData.email}</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="text-neon-pink" />
            <p>{profileData.phone}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg border border-neon-blue">
          <p className="text-gray-300 text-sm leading-relaxed">{profileData.bio}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={toggleEdit}
            className="bg-neon-green px-6 py-2 text-black font-semibold rounded-lg shadow-md hover:bg-neon-blue hover:text-white transition duration-300">
            <Edit className="w-5 h-5 inline-block mr-2" /> Edit Profile
          </button>
          <button
            className="bg-neon-pink px-6 py-2 text-black font-semibold rounded-lg shadow-md hover:bg-neon-blue hover:text-white transition duration-300">
            <Save className="w-5 h-5 inline-block mr-2" /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

// Tailwind Custom Styles (to be added in global.css)
// .neon-glow { text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc; }
// .border-neon-green { border-color: #00ffcc; }
// .border-neon-blue { border-color: #0077ff; }
// .bg-neon-green { background-color: #00ffcc; }
// .bg-neon-pink { background-color: #ff0077; }
// .bg-neon-blue { background-color: #0077ff; }

