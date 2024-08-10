import React from 'react';
import './Sidebar.css';

import { Link } from 'react-router-dom';
import { FaCalendar, FaFileInvoice, FaClock, FaBell, FaCog, FaUpload, FaTachometerAlt } from 'react-icons/fa'; // Import icons

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link></li> {/* Added Dashboard */}
        <li><Link to="/calendar"><FaCalendar /> Calendar</Link></li>
        <li><Link to="/invoice"><FaFileInvoice /> Invoice</Link></li>
        <li><Link to="/schedule"><FaClock /> Schedule</Link></li>
        <li><Link to="/settings"><FaCog /> Settings</Link></li>
        <li><Link to="/upload"><FaUpload /> Upload</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
