import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login-main">
      <p>This is a Login page</p>
      <Link to="/signup">
        <button>Go TO Signup PAGE</button>
      </Link>
    </div>
  );
};

export default Login;
