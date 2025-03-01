import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(true)
  return (
    <Router>
      <Routes>
        {/* These pages are outside the Layout */}
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main app routes inside Layout */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
