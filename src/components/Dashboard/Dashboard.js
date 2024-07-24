// Dashboard.js
import React, { Component } from 'react';
import './Dashboard.css'; // Import the CSS file
import Sidebar from './Sidebar'; // Import the Sidebar component
import Header from './Header';
import Home from './Home';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSidebarToggle: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState((prevState) => ({
      openSidebarToggle: !prevState.openSidebarToggle,
    }));
  }

  render() {
    const { openSidebarToggle } = this.state;

    return (
      <div className={`grid-dash-container ${openSidebarToggle ? 'sidebar-open' : ''}`}>
        <Header openSidebar={this.toggleSidebar} />
        <div className="content-container">
          <Sidebar openSidebarToggle={openSidebarToggle} />
          <div className={`main-content ${openSidebarToggle ? 'content-shifted' : ''}`}>
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
