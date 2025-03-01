import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="Login-main">
      <p>This is a Signup page</p>
      <Link to="/login">
        <button>Go TO LOGIN PAGE</button>
      </Link>
    </div>
  );
};

export default Signup;
