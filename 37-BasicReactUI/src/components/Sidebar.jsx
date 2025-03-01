import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <p>This is a fuucking sidebar</p>
      <Link to="/aboutPage">
        <button>Aboutpage</button>
      </Link>
    </div>
  );
};

export default Sidebar;
