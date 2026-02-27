// Dashboard.jsx
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <nav className="dashboard-navbar">
        <h2 className="logo">Workflow</h2>
        <button className="logout-btn">Logout</button>
      </nav>

      <div className="dashboard-container">
        <h1 className="dashboard-heading">Welcome Back 👋</h1>
        <p className="dashboard-subtext">
          Here’s what’s happening with your workflow today.
        </p>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Active Projects</h3>
            <p className="card-number">12</p>
          </div>

          <div className="card">
            <h3>Pending Tasks</h3>
            <p className="card-number">28</p>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <p className="card-number">76</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;