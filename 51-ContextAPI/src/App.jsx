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
import { Context_CounterProvider, CounterContext } from "./context/Counter";

function App() {
  return (
    <Routes>
      {/*
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
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
      */}

      <Route
        path="/"
        element={
          <Context_CounterProvider>
            <Home />
          </Context_CounterProvider>
        }
      />
    </Routes>
  );
}

export default App;
