import FormButton from "./FormButton";
import { Link as LinkToLogin } from "react-router-dom";
import { useNavigate as GoToLogin } from "react-router-dom";

function Register() {
  const nav = GoToLogin();
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg rounded" style={{ width: "30rem" }}>
        <h2 className="text-center text-primary">Join Pariksha Mitra</h2>
        <h6 className="text-center">A platform that aims to transform exam preparation</h6>
        <p className="text-center text-muted">Create an account</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            nav("/");
          }}
        >
          <div className="mb-3">
            <label>Name:</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label>Email:</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>
          <FormButton text="Register" color="primary" />
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <LinkToLogin to="/" className="text-decoration-none text-primary">
            Login
          </LinkToLogin>
        </p>
      </div>
    </div>
  );
}

export default Register;
