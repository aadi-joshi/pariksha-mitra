import { achievements } from "../assets/mockData";
const DashboardAchievements = () => (
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
);

export default DashboardAchievements;