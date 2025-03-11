import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      console.log("Some fields are invalid");
      return;
    }
    const url = "someUrl"

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();
      if (result.success) {
        setTimeout(() => navigate("/auth/login"), 5000);
      } else {
      }
    } catch (error) {
      console.log("error")
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex">
      {/* Left Image Section */}
      <div className="w-1/2 h-screen p-4">
        <img
          src="/freepik__candid-image-photography-natural-textures-highly-r__461.jpeg"
          className="w-full h-full object-cover rounded-3xl"
          alt="login background"
        />
      </div>

      {/* Right Sign-Up Section */}
      <div className="w-1/2 flex items-center justify-center text-white">
        <div className="w-full max-w-md px-8">
          <h1 className="text-3xl font-extrabold mb-2">Sign Up Page</h1>
          <p className="text-gray-400 mb-8">Sign up to start your journey</p>

          <form onSubmit={formSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 bg-[#0a0a0a] border border-gray-700 rounded"
                value={signupInfo.email}
                onChange={onChangeHandler}
              />
            </div>

            <div>
              <label htmlFor="name" className="text-sm block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 bg-[#0a0a0a] border border-gray-700 rounded"
                value={signupInfo.name}
                onChange={onChangeHandler}
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm block mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 bg-[#0a0a0a] border border-gray-700 rounded"
                value={signupInfo.password}
                onChange={onChangeHandler}
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 rounded-full bg-white text-black hover:bg-gray-100"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
