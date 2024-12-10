import React, { useState } from "react";
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,ResponsiveContainer,} from "recharts";
import { useNavigate } from "react-router-dom";
const progress=42;
const mockData = [
  { title: "Practice Tests", value: 34, description: "Completed tests" },
  { title: "Performance Score", value: "85%", description: "Average score" },
  { title: "Teacher Feedback", value: 7, description: "Feedback received" },
  { title: "Strongest Subject", value: "Mathematics", description: "17 tests cleared with 90+ marks" },
  { title: "Weakest Subject", value: "English", description: "6 tests cleared with below 60 marks" },
];
const graphData=[
  {name:"Week 1",Mathematics:90,English:70,Science:80},
  {name:"Week 2",Mathematics:88,English:72,Science:85},
  {name:"Week 3",Mathematics:95,English:60,Science:87},
  {name:"Week 4",Mathematics:92,English:25,Science:90},
  {name:"Week 5",Mathematics:82,English:68,Science:92},
];

const achievements=[
  {title:"Top Scorer in Mathematics",date:"Dec 1, 2024"},
  {title:"Consistent Performance Award",date:"Nov 25, 2024"},
];

const upcomingTests=[
  {subject:"Science",date:"Dec 15, 2024"},
  {subject:"Mathematics",date:"Dec 20, 2024"},
];

const studyMaterials=[
  {title:"Advanced Mathematics Guide",description:"Deepen your understanding of concepts."},
  {title:"English Grammar Tips",description:"Improve your grammar and writing skills."},
];
function Dashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate=useNavigate();

  const handleSignOut=() => {
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="bg-gray-900 p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Pariksha Mitra</h1>
        <div className="relative"><button onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-gray-800 p-2 rounded-full focus:outline-none hover:bg-gray-700"
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
  <p className="text-4xl font-bold text-purple-400 p-4">Your Dashboard</p>
  <p className="text-lg text-gray-600 ">Track your progress, manage courses, and take your tests all in one place.</p>
</div>



      <div className="p-6"><div className="bg-gray-900 rounded-lg p-6 mb-8">
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
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-purple-400 mb-4">Performance Over Time</h2>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={graphData}>
                <CartesianGrid stroke="#444" /><XAxis dataKey="name" stroke="#aaa" /><YAxis stroke="#aaa" />
                <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
                <Line type="monotone" dataKey="Mathematics" stroke="#8884d8" />
                <Line type="monotone" dataKey="English" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Science" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </div></div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-bold text-purple-400 mb-4">Achievements</h2>
            <ul>
              {achievements.map((achievement, index) => (
                <li key={index} className="mb-4">
                  <h3 className="text-lg font-bold text-purple-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-400">{achievement.date}</p>
                </li>
              ))}
            </ul></div>

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

        <footer className="bg-gray-900 p-6 mt-8 text-center">
          <div className="mb-4">
            <a href="https://youtube.com"><button className="mx-2 text-white hover:text-purple-400">YouTube</button></a>
            <a href="https://instagram.com"><button className="mx-2 text-white hover:text-purple-400">Instagram</button></a>
            <a href="https://linkedin.com"><button className="mx-2 text-white hover:text-purple-400">LinkedIn</button></a>
          </div>
          <p className="text-sm text-gray-400">Privacy Policy | © {new Date().getFullYear()} Pariksha Mitra</p>
        </footer>
      </div></div>
  );
}

export default Dashboard;
