import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ islogged }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (islogged) {
      navigate("/");
    }
  });
  return <div>Login</div>;
};

export default Login;
