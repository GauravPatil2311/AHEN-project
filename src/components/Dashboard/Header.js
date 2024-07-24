import React, { Component } from 'react';
import { BsSearch, BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle } from 'react-icons/bs';
import { MdMenuOpen } from "react-icons/md";
import './Header.css';

class Header extends Component {
  render() {
    const { openSidebar } = this.props;

    return (
      <header className='dash_header'>
        <div className='header_menu-icon'>
        <MdMenuOpen className='sidebar_open_icon' onClick={openSidebar} />
        </div>
        <div className='header-left'>
          {/* <BsSearch className='headleft_icon' /> */}
        </div>
        <div className='header-right'>
          
          <BsPersonCircle className='right_icon' />
        </div>
      </header>
    );
  }
}

export default Header;
