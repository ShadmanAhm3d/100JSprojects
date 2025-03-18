import React, { useState } from "react";
import {
  User,
  MapPin,
  Briefcase,
  Calendar,
  Mail,
  Phone,
  Edit,
  Save,
  Camera,
} from "lucide-react";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: "Shadman Ahmed",
    age: 28,
    email: "cyberpunk@example.com",
    phone: "91798682374",
    address: "Night City, Sector 7",
    serviceType: "Hacker & Designer",
    bio: "Cybernetic artist and hacker, blending digital and analog aesthetics to create immersive designs.",
    image: "https://picsum.photos/1200/300",
  });

  return (
    <div className="main">
      <div className="upperpart relative">
        <div className="imageholder h-32 border border-black">
          <img
            src={profileData.image}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="avatar absolute top-20 left-80 ">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>{" "}
      <div className="mid mt-16  flex flex-col gap-6 items-center justify-center border border-red-500">
        <h1 className="text-3xl">{profileData.name}</h1>
        <h1 className="text-2xl">{profileData.serviceType}</h1>
      </div>
      {/* Change Information Section */}
      <div className="border border-pink-500 flex justify-center m-auto px-12  flex-col gap-12">
        <div className="name">
          <legend className="fieldset-legend">Name </legend>
          <input
            type="text"
            placeholder="Large"
            className="input input-lg border"
            value={profileData.name}

          />{" "}
        </div>
        <div className="serviceType">
          <legend className="fieldset-legend">ServiceType </legend>
          <input
            type="text"
            placeholder="Primary"
            className="input input-primary  border"
            value={profileData.serviceType}
          />
        </div>

        <div className="email">
          <legend className="fieldset-legend">Email </legend>
          <input
            type="email"
            placeholder="Primary"
            className="input input-primary border"
            value={profileData.email}
          />
        </div>

        <div className="age">
          <legend className="fieldset-legend ">Age </legend>
          <input
            type="email"
            placeholder="Primary"
            className="input input-primary border"
          />
        </div>

        <div className="something">
          <legend className="fieldset-legend">Something </legend>
          <textarea
            placeholder="Bio"
            className="textarea textarea-md border"
          ></textarea>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
