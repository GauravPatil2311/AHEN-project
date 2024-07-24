import React, { Component } from 'react';
import './Adminheader.css';
// import { BsPersonCircle, MdMenuOpen } from 'react-icons/all';
import { RiMenuUnfoldLine } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";

class Adminheader extends Component {
  render() {
    const { openSidebar } = this.props;
    return (
      <div className="admin-header">
        <div className="admin-header-left">
          <RiMenuUnfoldLine className="admin-header-menu-icon" onClick={openSidebar}/>
        </div>
        <div className="admin-header-right">
          <BsPersonCircle className="admin-header-right-icon" />
        </div>
      </div>
    );
  }
}

export default Adminheader;
