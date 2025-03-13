import { Outlet } from 'react-router-dom';
import Footer from "../pages/Footer"

const AppLayout = () => {
  return (
    <div>

      <Outlet />

      <Footer />
    </div>
  );
};

export default AppLayout;
