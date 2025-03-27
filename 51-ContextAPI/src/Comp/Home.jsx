import React, { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import DashBoard from "./DashBoard";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const {user,logout} = useAuth();
  const navigate = useNavigate();

  const handler = () =>{
    navigate("/dashboard")
  }

  return (
    <div>
      <h1>Welcome :: {user.name}</h1>
      <button onClick={logout}> LOG OUT NIGGA </button>
      <button onClick={handler}>Go TO DASHBOARD</button>
    </div>

  );
};

export default Home;
