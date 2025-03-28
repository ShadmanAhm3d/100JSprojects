import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/landing" />;
};

export default ProtectedRoute;
