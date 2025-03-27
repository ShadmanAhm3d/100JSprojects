import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on initial load
  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        // Clear invalid stored data
        localStorage.removeItem('user');
      }
    }
  }, []);

  const signup = async ({ fname, email, password }) => {
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ fname, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      
      setUser(data.user);
      console.log(data.user)
      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      setIsAuthenticated(false);
      setUser(null);
      alert(err.message);
    }
  };

  const login = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      
      setUser(data.user);
      console.log(data.user)
      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      setIsAuthenticated(false);
      setUser(null);
      alert(err.message);
    }
  };

  const logout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    
    setUser(null);
    setIsAuthenticated(false);
    navigate("/login");
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
