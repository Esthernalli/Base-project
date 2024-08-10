import React from 'react';
import SignIn from './SignIn'; // Ensure the path is correct
import './Dashboard.css'; // Add your specific Dashboard CSS if needed

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SignIn />
    </div>
  );
};

export default Dashboard;
