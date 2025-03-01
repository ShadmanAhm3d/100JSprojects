import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <p>This is a Landing Page</p>
      
      <Link to="/login">
        <button>GO TO LOGIN PAGE</button>
      </Link>

      <Link to="/signup">
        <button>GO TO SIGNUP PAGE</button>
      </Link>
    </div>
  );
};

export default LandingPage;

