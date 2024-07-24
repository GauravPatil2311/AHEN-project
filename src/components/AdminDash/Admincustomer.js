// Admincustomer.jsx

import React, { Component } from 'react';
import Adminheader from './Adminheader';
import AdminSidebar from './Adminsidebar';
import Customercard from './Customercard';
import './AdmincustomerStyles.css'; // Import the styling for Admincustomer
import Customerdatatable from './Customerdatatable';

class Admincustomer extends Component {
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
            <AdminSidebar openSidebarToggle={openSidebarToggle} />
            <div className={`admindash-main-content ${openSidebarToggle ? 'content-shifted' : ''}`}>
            
            <Customercard/>
            <Customerdatatable/>
          </div>
        </div>
        </div>
      
    );
  }
}

export default Admincustomer;
