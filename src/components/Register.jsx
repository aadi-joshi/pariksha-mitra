import React from "react";
import FormButton from "./FormButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import NumStatistics from "./NumStatistics";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center bg-gradient-to-r from-black via-purple-900 to-black">
      <div className="w-full md:w-1/2 bg-gradient-to-b from-purple-900 via-black to-purple-900 flex items-center justify-center p-6 md:p-12 order-1 md:order-2 animate-fadeInRight">
        <div className="bg-black/70 shadow-2xl rounded-lg p-8 md:p-10 w-full max-w-md animate-slideUp">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-purple-400">Join Us</h2>
          <p className="text-center text-gray-400 mt-2 text-sm md:text-base">Transform your exam preparation journey</p>
          <form 
            className="mt-4 space-y-4 md:space-y-6" 
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
          >


            <div>
              <label className="block text-purple-500 text-sm md:text-base">Name:</label>
              <input 
                type="text" 
                className="w-full p-2 md:p-3 bg-gray-800 text-gray-300 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm md:text-base"
                placeholder="Enter your name" 
              />
            </div>
            <div>
              <label className="block text-purple-500 text-sm md:text-base">Email:</label>
              <input
                type="email"
                className="w-full p-2 md:p-3 bg-gray-800 text-gray-300 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm md:text-base"
                placeholder="Enter your email" 
              />
            </div>
            <div>
              <label className="block text-purple-500 text-sm md:text-base">Password:</label>
              <input 
                type="password" 
                className="w-full p-2 md:p-3 bg-gray-800 text-gray-300 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm md:text-base"
                placeholder="Enter your password"
              />
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
              <FormButton text="Register" color="purple" />
            </div>
          </form>
          <p className="text-center mt-4 text-gray-400 text-sm md:text-base">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 text-white px-6 md:px-12 py-8 md:py-16 flex flex-col justify-center space-y-4 md:space-y-8 order-2 md:order-1 animate-fadeInLeft text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-slideUp">
          Welcome to Pariksha Mitra
        </h1>

        <p className="text-base md:text-lg animate-slideUp">
          Join <span className="font-bold text-purple-500">Pariksha Mitra</span>, the ultimate study platform trusted
          by thousands of students. Prepare smarter, track your progress, and achieve your goals with ease.
        </p>
        <div className="animate-slideUp flex flex-col items-center md:items-start">
          <NumStatistics />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Register;