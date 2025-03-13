import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./funcs/Login";
import Signup from "./funcs/Signup";
import AuthRoutes from "./funcs/AuthRoutes";
import AppLayout from "./layouts/AppLayout";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [islogged, setIslogged] = useState(true);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/login" element={<Login islogged={islogged} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<AuthRoutes islogged={islogged} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
