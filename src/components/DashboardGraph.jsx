import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, } from "recharts";
import { graphData } from "../assets/mockData";
const DashboardGraph = () => (
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
);

export default DashboardGraph;