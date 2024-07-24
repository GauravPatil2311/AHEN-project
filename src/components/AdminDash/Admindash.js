import React, { Component } from 'react';
import './Admindash.css'; // Import the new CSS file with updated naming conventions
import Adminsidebar from './Adminsidebar';
import Adminheader from './Adminheader';
import Serviceprovider from './Serviceprovider';
import Admincustomer from './Admincustomer';

class Admindash extends Component {
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
      <div className={`admindash-container ${openSidebarToggle ? 'sidebar-open' : ''}`}>
        <Adminheader openSidebar={this.toggleSidebar} />
        <div className="admindash-content-container">
          <Adminsidebar openSidebarToggle={openSidebarToggle} />
          <div className={`admindash-main-content ${openSidebarToggle ? 'content-shifted' : ''}`}>
            <Serviceprovider />
          </div>
        </div>
      </div>
    );
  }
}

export default Admindash;
