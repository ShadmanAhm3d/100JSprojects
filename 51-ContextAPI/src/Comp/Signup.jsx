import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const [userdata, setUserdata] = useState({
    fname: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { id, value } = e.target;
    setUserdata((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup({
      fname: userdata.fname,
      email: userdata.email,
      password: userdata.password
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">Name</label>
          <input
            onChange={onChangeHandler}
            value={userdata.fname}
            type="text"
            placeholder="Name"
            id="fname"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={onChangeHandler}
            value={userdata.email}
            type="email"
            placeholder="Email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={onChangeHandler}
            value={userdata.password}
            type="password"
            placeholder="Password"
            id="password"
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
