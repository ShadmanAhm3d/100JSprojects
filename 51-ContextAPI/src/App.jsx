import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Comp/Login";
import Signup from "./Comp/Signup";
import Home from "./Comp/Home";
import ProtectedRoute from "./Comp/ProtectedRoute";
import PublicRoute from "./Comp/PublicRoute";
import DashBoard from "./Comp/DashBoard";
import { PewContext } from "./context/Pew";
import { PewProvider } from "./context/Pew";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <PewProvider>
              <DashBoard />
            </PewProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
