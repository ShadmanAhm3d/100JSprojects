import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      setMessage("All fields are required");
      return;
    }

    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { msg, success, token, error } = result;

      if (success) {
        localStorage.setItem("token", token);
        localStorage.setItem("loggedInUser", email);
        setMessage(msg);
        setTimeout(() => {
          navigate("/mainpage");
        }, 1000);
      } else {
        setMessage(error || msg);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex">
      {/* Right Login Section */}
      <div className="w-1/2 flex items-center justify-center text-white">
        <div className="w-full max-w-md px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold mb-2">Log In</h1>
            <p className="text-gray-400">Welcome! to WorkersCOnnect</p>
          </div>

          {message && (
            <div className="mb-4 text-center text-red-500">{message}</div>
          )}

          <form onSubmit={onSubmitHandler} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#0a0a0a] border-gray-700 p-2 rounded"
                value={loginInfo.email}
                onChange={onChangeHandler}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm block">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-[#0a0a0a] border-gray-700 p-2 rounded"
                value={loginInfo.password}
                onChange={onChangeHandler}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-white text-black hover:bg-gray-100 p-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Left Image Section */}
      <div className="w-1/2 h-screen p-4">
        <div className="h-full w-full">
          <img
            src="/images/blue-collar-worker.jpg" // Ensure this path points to your image
            className="w-full h-full object-cover rounded-3xl"
            alt="Blue-collar worker"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

