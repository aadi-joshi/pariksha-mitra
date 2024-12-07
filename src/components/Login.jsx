import FormButton from "./FormButton";
import { Link as LinkToRegister } from "react-router-dom";
import { useNavigate as GoToDashboard } from "react-router-dom";

function Login() {
  const nav = GoToDashboard();
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg rounded" style={{ width: "30rem" }}>
        <h2 className="text-center text-primary">Welcome to Pariksha Mitra</h2>
        <h6 className="text-center">Your go-to digital examination platform</h6>
        <p className="text-center text-muted">Login to continue</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            nav("/dashboard");
          }}
        >
          <div className="mb-3">
            <label>Email:</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>
          <FormButton text="Login" color="primary" />
        </form>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <LinkToRegister to="/register" className="text-decoration-none text-primary">
            Register
          </LinkToRegister>
        </p>
      </div>
    </div>
  );
}

export default Login;
