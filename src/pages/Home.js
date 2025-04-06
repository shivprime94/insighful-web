import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="home-page">
        <h1>Time Tracker</h1>
        <div className="feature-section">
          <h2>Track Your Work Hours Efficiently</h2>
          <p>
            Time Tracker helps teams monitor and manage work hours with automatic time tracking, 
            screenshots, and detailed reports.
          </p>
          
          <div className="features">
            <div className="feature">
              <h3>Time Tracking</h3>
              <p>Automatically track the time you spend on different projects and tasks.</p>
            </div>
            
            <div className="feature">
              <h3>Project Management</h3>
              <p>Organize your work by projects and tasks to keep everything structured.</p>
            </div>
            
            <div className="feature">
              <h3>Activity Monitoring</h3>
              <p>Capture screenshots at regular intervals to document your work progress.</p>
            </div>
          </div>
        </div>
        
        <div className="cta-section">
          <h2>Ready to Start?</h2>
          <p>
            Please contact your administrator to create an account. Once registered, 
            you'll receive an email with verification instructions.
          </p>
          <p>
            Already have an account? <Link to="/verify-email">Verify your email</Link> to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;