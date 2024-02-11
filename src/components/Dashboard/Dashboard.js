import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Create a CSS file for styling

class DriverInfo extends Component {
  render() {
    // Replace these placeholders with actual driver information
    const driverPhotoUrl = 'path/to/driver/photo.jpg';
    const driverName = 'John Doe';

    return (
      <div className="driver-info">
        <img src={driverPhotoUrl} alt="Driver" />
        <p>{driverName}</p>
      </div>
    );
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      isDropdownOpen: false,
    };
  }

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  render() {
    const { isSidebarOpen, isDropdownOpen } = this.state;

    return (
      <div className={`dashboard ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Driver Information */}
          <DriverInfo />

          {/* Button to toggle sidebar */}
          <button className="toggle-btn" onClick={this.toggleSidebar}>
            {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
          </button>

          {/* Main section */}
          <div className="main-section">
            <h2>Main Section</h2>

            {/* Dashboard dropdown */}
            <div className="dropdown">
              <button className="dropbtn" onClick={this.toggleDropdown}>
                Dashboard
              </button>
              <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                <Link to="#">Item 1</Link>
                <Link to="#">Item 2</Link>
                {/* Add more items as needed */}
              </div>
            </div>

            {/* Manage dropdown */}
            <div className="dropdown">
              <button className="dropbtn" onClick={this.toggleDropdown}>
                Manage
              </button>
              <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                <Link to="#">Item 1</Link>
                <Link to="#">Item 2</Link>
                {/* Add more items as needed */}
              </div>
            </div>

            {/* Finance dropdown */}
            <div className="dropdown">
              <button className="dropbtn" onClick={this.toggleDropdown}>
                Finance
              </button>
              <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                <Link to="#">Item 1</Link>
                <Link to="#">Item 2</Link>
                {/* Add more items as needed */}
              </div>
            </div>
          </div>

          {/* Tools section */}
          <h2>Tools</h2>

          <div className="dropdown">
            <button className="dropbtn" onClick={this.toggleDropdown}>
              Communication
            </button>
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <Link to="#">Item 1</Link>
              <Link to="#">Item 2</Link>
              {/* Add more items as needed */}
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn" onClick={this.toggleDropdown}>
              System
            </button>
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <Link to="#">Item 1</Link>
              <Link to="#">Item 2</Link>
              {/* Add more items as needed */}
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="content">
          {/* Content moved to the sidebar */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
