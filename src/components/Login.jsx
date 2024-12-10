import React from "react";
import FormButton from "./FormButton";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
function Login(){
  const navigate=useNavigate();
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-r from-black via-purple-900 to-black">
      <div className="w-1/2 text-white px-12 py-16 flex flex-col justify-center space-y-8 animate-fadeInLeft">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome Back to Pariksha Mitra
        </h1>
        <p className="text-lg">
          Log in to access personalized study plans, track your progress, and achieve exam success with{" "}
          <span className="font-bold text-purple-500">Pariksha Mitra</span>.</p>


        <div className="space-y-4">
          <p className="text-2xl">
            <span className="text-4xl font-bold text-pink-500">80%</span> Success Rate
          </p>
          <p className="text-2xl">
            <span className="text-4xl font-bold text-purple-500">10,000+</span> Students Trust Us
          </p>
          <p className="text-2xl">
            <span className="text-4xl font-bold text-pink-500">200+</span> Practice Tests Available
          </p></div>


        <div className="flex space-x-4 mt-8">
          <a href="mailto:toaadijoshi@gmail.com"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-transform transform hover:scale-105"
          >Contact Us</a>


          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-800 rounded-full hover:bg-pink-600 transition-all"
            ><img src="../src/assets/icons/instagram.png" width="25"></img>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-800 rounded-full hover:bg-pink-600 transition-all"
            ><img src="../src/assets/icons/youtube.png" width="25"></img>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-800 rounded-full hover:bg-pink-600 transition-all"
            ><img src="../src/assets/icons/linkedin.png" width="25"></img>
            </a>
            <a href="mailto:toaadijoshi@gmail.com" className="p-3 bg-purple-800 rounded-full hover:bg-pink-600 transition-all">
              <img src="../src/assets/icons/mail.png" width="25"></img></a>
          </div>
        </div>
      </div>




      <div className="w-1/2 bg-gradient-to-b from-purple-900 via-black to-purple-900 flex items-center justify-center p-12 animate-fadeInRight">
        <div className="bg-black/70 shadow-2xl rounded-lg p-10 w-96">
          <h2 className="text-center text-4xl font-bold text-purple-400">Login</h2>
          <p className="text-center text-gray-400 mt-2">Your personalized exam preparation companion</p>
          <form className="mt-4 space-y-6" onSubmit={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }} >
            <div>
              <label className="block text-purple-500">Email:</label>
              <input
                type="email"
                className="w-full p-3 bg-gray-800 text-gray-300 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-purple-500">Password:</label>
              <input
                type="password"
                className="w-full p-3 bg-gray-800 text-gray-300 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
            <FormButton text="Login" color="purple" />
            </div>
          </form>
          <p className="text-center mt-4 text-gray-400">
            Don't have an account?{" "}
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