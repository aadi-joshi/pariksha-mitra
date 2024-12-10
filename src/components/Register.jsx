import React from "react";
import FormButton from "./FormButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import NumStatistics from "./NumStatistics";
function Register() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-r from-black via-purple-900 to-black">
      {/* this is the left side, statistics will be shown here
      use of numbers for emphasis, showing how many people benefitted
      social media links/icons*/}
      <div className="w-1/2 text-white px-12 py-16 flex flex-col justify-center space-y-8 animate-fadeInLeft">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-slideUp">
          Welcome to Pariksha Mitra
        </h1>


        <p className="text-lg animate-slideUp">
          Join <span className="font-bold text-purple-500">Pariksha Mitra</span>, the ultimate study platform trusted
          by thousands of students. Prepare smarter, track your progress, and achieve your goals with ease.
        </p>
        {/* Below this are the numbers and links for the social media handles etc.*/}
        <div className=" animate-slideUp">
        <NumStatistics />
        <SocialLinks />
        </div>
      </div>
      <div className="w-1/2 bg-gradient-to-b from-purple-900 via-black to-purple-900 flex items-center justify-center p-12 animate-fadeInRight">
        <div className="bg-black/70 shadow-2xl rounded-lg p-10 w-96 animate-slideUp">
          <h2 className="text-center text-4xl font-bold text-purple-400">Join Us</h2>
          <p className="text-center text-gray-400 mt-2">Transform your exam preparation journey</p>
          <form className="mt-4 space-y-6" onSubmit={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
          >
            {/* Register form starts here*/}
            <div>
              <label className="block text-purple-500">Name:</label>
              <input type="text" className="w-full p-3 bg-gray-800 text-gray-300 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-purple-500">Email:</label>
              <input
                type="email"
                className="w-full p-3 bg-gray-800 text-gray-300 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-purple-500">Password:</label>
              <input type="password" className="w-full p-3 bg-gray-800 text-gray-300 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
              <FormButton text="Register" color="purple" />
            </div>
          </form>
          <p className="text-center mt-4 text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


export default Register;
