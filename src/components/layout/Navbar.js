import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <i className="fas fa-dumbbell"></i>
          CrossFit Tracker
        </Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <i className="fas fa-home"></i>
            Feed
          </Link>
          <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
            <i className="fas fa-user"></i>
            Profile
          </Link>
          <Link to="/analytics" className={location.pathname === '/analytics' ? 'active' : ''}>
            <i className="fas fa-chart-line"></i>
            Analytics
          </Link>
          <Link to="/utilities" className={location.pathname === '/utilities' ? 'active' : ''}>
            <i className="fas fa-stopwatch"></i>
            Utilities
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 