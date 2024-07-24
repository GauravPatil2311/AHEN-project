import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isSignInPageOpen: false 
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
      isSignInPageOpen: false 
    }));
  };

  toggleSignInPage = () => {
    this.setState((prevState) => ({
      isSignInPageOpen: !prevState.isSignInPageOpen
    }));
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false
    });
  };

  render() {
    const { isMenuOpen, isSignInPageOpen } = this.state;

    return (
      <div>
        <nav className="navbar">
          <div className="navbar__left">
            <span className="navbar__title">AHEN</span>
          </div>

          <div className="navbar__right">
            <Link to="/signin" className="navbar__signIn" onClick={this.toggleSignInPage}>
              Sign In
            </Link>
            <div className="navbar__hamburgerCircle"></div>
            <button className="navbar__hamburgerButton" onClick={this.toggleMenu}>
              {isMenuOpen ? <FaTimes className="navbar__icon" /> : <FaBars className="navbar__icon" />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="navbar__fullscreenMenu active">
            <button className="navbar__closeButton" onClick={this.toggleMenu}>
              <FaTimes className="navbar__closeIcon" />
            </button>
            <div className="navbar__menuItems">
              <Link to="/" className="navbar__menuItem" onClick={this.closeMenu}>
                HOME
              </Link>
              <Link to="/services" className="navbar__menuItem" onClick={this.closeMenu}>
                SERVICES
              </Link>
              <Link to="/about" className="navbar__menuItem" onClick={this.closeMenu}>
                ABOUT US
              </Link>
              <Link to="/contact" className="navbar__menuItem" onClick={this.closeMenu}>
                CONTACT US
              </Link>
              <Link to="/terms" className="navbar__menuItem" onClick={this.closeMenu}>
                TERMS & CONDITIONS
              </Link>
            </div>
          </div>
        )}
   {isSignInPageOpen && (
          <div className="navbar__signin-page" onClick={this.toggleSignInPage}></div>
        )}
      </div>
    );
  }
}

export default Navbar;
