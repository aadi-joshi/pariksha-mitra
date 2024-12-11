import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardFooter from "./DashboardFooter";
import { mockData, upcomingTests, progress } from "../assets/mockData";
import DashboardGraph from "./DashboardGraph";
import DashboardAchievements from "./DashboardAchievements";

function Dashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex bg-gray-900 p-4 justify-between items-center shadow-lg">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-slideUp">
            Pariksha Mitra
          </h1>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:scale-105 transition-transform animate-slideUp">
            Take New Test {/* doesnt do anything yet*/}
          </button>
        </div>
        <div className="relative"><button onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-gray-800 p-2 rounded-full focus:outline-none hover:bg-gray-700 animate-slideUp"
        >
          <img src="../src/assets/icons/profile.png" width="25"></img>
        </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-gray-800 shadow-lg rounded-lg">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
                <button onClick={handleSignOut}
                  className="px-4 py-2 text-white whitespace-nowrap">Sign Out
                </button></div> </div>
          )}
        </div>
      </header>
      <div className="text-center">
        <p className="text-4xl font-bold text-purple-400 p-4 animate-slideUp">Your Dashboard</p>
        <p className="text-lg text-gray-600 animate-slideUp ">Track your progress, manage courses, and take your tests all in one place.</p>
      </div>

      <div className="p-6 animate-fadeIn">
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-purple-400 mb-4">Your Progress: {progress}%</h2>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-6 rounded-full"
            style={{ width: `${progress}%` }}></div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-purple-400 mb-4">Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {mockData.map((data, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-4 shadow-lg text-center hover:scale-105 transform transition-transform"
              >
                <h3 className="text-lg font-bold text-purple-300">{data.title}</h3>
                <p className="text-2xl font-bold text-purple-500 mt-2">{data.value}</p>
                <p className="text-sm text-gray-400 mt-1">{data.description}</p>
              </div>
            ))}
          </div></div>
        <DashboardGraph />


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <DashboardAchievements />

          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-bold text-purple-400 mb-4">Upcoming Tests</h2>
            <ul>
              {upcomingTests.map((test, index) => (
                <li key={index} className="mb-4">
                  <p className="text-lg font-bold text-purple-300">{test.subject}</p>
                  <p className="text-sm text-gray-400">{test.date}</p>
                </li>
              ))}
            </ul></div></div>

        <DashboardFooter />

      </div>
    </div>
  );
}

export default Dashboard;
