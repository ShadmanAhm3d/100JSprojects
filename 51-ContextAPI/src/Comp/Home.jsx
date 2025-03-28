import React, { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import DashBoard from "./DashBoard";
import { useNavigate } from "react-router-dom";
import { CounterContext } from "../context/Counter";

const Home = () => {

  // const {user,logout} = useAuth();
  // const navigate = useNavigate();
  //
  // const handler = () =>{
  //   navigate("/dashboard")
  // }
  //

  const counter = useContext(CounterContext);
  console.log(CounterContext);
  return (
    <div>
      <h1>{counter.count}</h1>
      <h1>{counter.fname}</h1>
    </div>

  );
};

export default Home;
