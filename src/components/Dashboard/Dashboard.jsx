import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="brand-logo">Dashboard</h2>
        <nav className="nav-menu">
          <div className="nav-item active">🏠 DASHBOARD</div>
          <div className="nav-item">📊 CHART</div>
          <div className="nav-item">📱 APPS</div>
          <div className="nav-item">💬 FORUM</div>
          <div className="nav-item">✉️ EMAIL</div>
          <div className="nav-item">⚙️ SETTING</div>
        </nav>
        
        <div className="sidebar-section">
          <p className="section-title">PROJECTS</p>
          <div className="nav-item">OPTION</div>
          <div className="nav-item">CASE</div>
        </div>

        <button className="logout-btn" onClick={() => navigate('/login')}>
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="header">
          <div className="search-container">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="header-icons">
            <span>🔔</span>
            <span>⚙️</span>
            <span>✉️</span>
            <div className="user-avatar">J</div>
          </div>
        </header>

        <div className="content-grid">
          {/* Top Row Stats */}
          <div className="glass-card stat-card purple">
            <div className="card-info">
              <p>Active Users</p>
              <h3>1,544</h3>
            </div>
            <div className="progress-ring">64%</div>
          </div>

          <div className="glass-card stat-card cyan">
            <div className="card-info">
              <p>Pending Tasks</p>
              <h3>2,487</h3>
            </div>
            <div className="progress-ring">40%</div>
          </div>

          {/* Large Chart Area */}
          <div className="glass-card main-chart">
            <h3>Activities</h3>
            <div className="visual-placeholder">
              {/* This is where your graph would go */}
              <div className="neon-line"></div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="glass-card calendar-card">
            <h3>January</h3>
            <div className="calendar-grid">
              {/* Simple representation of a calendar */}
              {[...Array(31)].map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;