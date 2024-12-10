import React, { useState } from "react";
import FormButton from "./FormButton";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import SocialLinks from "./SocialLinks";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authService.login(email, password)) {
      localStorage.setItem("authToken", "sampleToken123");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
      alert("Use credentials:\nMail: aadi.joshi24@vit.edu\nPass: pmtest@24");
    }
  };

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-r from-black via-purple-900 to-black">
      <div className="w-1/2 text-white px-12 py-16 flex flex-col justify-center space-y-8 animate-fadeInLeft">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-slideUp">
          Welcome Back to Pariksha Mitra
        </h1>
        <p className="text-lg animate-slideUp">
          Log in to access personalized study plans, track your progress, and achieve exam success; all with the help of one app.
        </p>
        <div className="animate-slideUp">
        <SocialLinks />
        </div>
      </div>

      <div className="w-1/2 bg-gradient-to-b from-purple-900 via-black to-purple-900 flex items-center justify-center p-12 animate-fadeInRight">
        <div className="bg-black/70 shadow-2xl rounded-lg p-10 w-96 animate-slideUp">
          <h2 className="text-center text-4xl font-bold text-purple-400">Login</h2>
          <p className="text-center text-gray-400 mt-2">to access your personalized exam preparation companion</p>
          <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-purple-500">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-gray-800 text-gray-300 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-purple-500">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-gray-800 text-gray-300 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
              <FormButton text="Login" color="purple" />
            </div>
          </form>
          {error && (
            <p className="text-center text-red-500 mt-4">{error}</p>
          )}
          <p className="text-center mt-4 text-gray-400">
            Don't have an account? {" "}
            <Link to="/" className="text-purple-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
