import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const toop="{ user }";

function Dashboard() {
  return (
    <div className="container my-5">
      <div className="card shadow-lg rounded">
        <div className="card-header text-center bg-primary text-white">
          <h2>Welcome to Pariksha Mitra (परीक्षा मित्र)</h2>
        </div>
        <div className="card-body">
          <h4>Welcome, {toop}</h4>
          <p className="text-muted">
            Thank you for choosing Pariksha Mitra
          </p>
          <h4>About Pariksha Mitra</h4>
          <p className="text-muted">
            Pariksha Mitra is a comprehensive digital examination platform for Marathi medium students from 5th to 10th standard. The platform aims to transform exam preparation through:
          </p>
          <ul className="list-group">
            <li className="list-group-item">Personalized practice tests</li>
            <li className="list-group-item">Detailed performance analytics</li>
            <li className="list-group-item">Teacher-guided feedback tests</li>
            <li className="list-group-item">Interactive learning experiences through games</li>
          </ul>
          <p className="mt-4">Start exploring the platform and make your learning experience more effective and engaging!</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
