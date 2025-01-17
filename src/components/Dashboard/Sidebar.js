import React, { Component } from 'react';
import {  BsGrid1X2Fill } from 'react-icons/bs';
import './Sidebar.css';
import { MdClose } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdManageHistory } from "react-icons/md";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { MdHelp } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";

// ... (import statements)

class Sidebar extends Component {
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
      { icon: <ImProfile className='side_list_icon' />, label: 'Profile', link: '/profile' },
      { 
        icon: <BsGrid1X2Fill className='side_list_icon' />, 
        label: 'Dashboard', 
        submenus: [
          { icon: <FaHome className='submenu-icon'/>, label: 'Home', link: '/dashboard' },
          { icon: <AiFillSchedule className='submenu-icon'/>, label: 'Scheduler', link: '/dashboard/scheduler' },
        ],
      },
      { icon: <MdManageHistory className='side_list_icon' />, label: 'Manage', link: '/manage' },
      { icon: <HiOutlineBanknotes className='side_list_icon' />, label: 'Finance', link: '/finance' },
      { icon: <MdHelp className='side_list_icon' />, label: 'Help', link: '/help' },
    ];

    return (
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : "sidebar-closed"}>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
            <FaRegUserCircle className='icon_header'/>
            <span className='driver_name'> Drivers </span>
          </div>
        </div>
          <hr/>
        <ul className='sidebar-list'>
          {sidebarItems.map((item, index) => (
            <li key={index} className='sidebar-list-item'>
              {item.submenus ? (
                <>
                  <div className='dashboard-toggle' onClick={this.toggleDashboardMenu}>
                    <BsGrid1X2Fill className='side_list_icon' /> Dashboard
                  </div>
                  {dashboardMenuOpen && (
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

export default Sidebar;