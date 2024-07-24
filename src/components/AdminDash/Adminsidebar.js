import React, { Component } from 'react';
import {  BsGrid1X2Fill } from 'react-icons/bs';
import './Adminsidebar.css';
import { MdClose } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdManageHistory } from "react-icons/md";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { MdHelp } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { FaTaxi } from "react-icons/fa6";

class AdminSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardMenuOpen: false,
    };
  }

  toggleDashboardMenu = () => {
    this.setState((prevState) => ({
      dashboardMenuOpen: !prevState.dashboardMenuOpen,
    }));
  };

  render() {
    const { openSidebarToggle, openSidebar } = this.props;
    const { dashboardMenuOpen } = this.state;
    const sidebarItems = [
      { icon: <ImProfile className='side_list_icon' />, label: 'Admin Profile', link: '/admin/profile'  },
      {
        icon: <BsGrid1X2Fill className='side_list_icon' />,
        label: 'Admin Dashboard',
        submenus: [
          { icon:  <IoMdPeople className='submenu-icon'/>, label: 'Customers', link: '/admincustomer' },
          { icon:  <FaTaxi className='submenu-icon'/>, label: 'Drivers', link: '/admindash' },
        ],
      },
      { icon: <MdManageHistory className='side_list_icon' />, label: 'Manage', link: '/admin/manage' },
      { icon: <HiOutlineBanknotes className='side_list_icon' />, label: 'Finance', link: '/admin/finance' },
      { icon: <MdHelp className='side_list_icon' />, label: 'Help', link: '/admin/help' },
    ];

    return (
      <aside id="admin-sidebar" className={openSidebarToggle ? "sidebar-responsive" : "sidebar-closed"}>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
            <FaRegUserCircle className='icon_header' />
            <span className='admin_name'> Admin </span>
          </div>
        </div>
        <hr/>
        <ul className='sidebar-list'>
          {sidebarItems.map((item, index) => (
            <li key={index} className='sidebar-list-item'>
              {item.submenus ? (
                <>
                  <div className='dashboard-toggle' onClick={this.toggleDashboardMenu}>
                    <BsGrid1X2Fill className='side_list_icon' /> {item.label}
                  </div>
                  {this.state.dashboardMenuOpen && (
                    <ul className='submenu-list'>
                      {item.submenus.map((submenu, subIndex) => (
                        <li key={subIndex} className='submenu-list-item'>
                          <a href={submenu.link}>
                            {submenu.icon} {submenu.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a href={item.link}>
                  {item.icon} {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

export default AdminSidebar;
