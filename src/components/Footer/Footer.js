import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import'./Footer.css'
class Footer extends Component {
  render() {
    return (
      <div className="footer-dark">
        <footer>
          <div className="foot_container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Web design</a></li>
                  <li><a href="./sbar">Development</a></li>
                  <li><a href="#">Hosting</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li><a href="#">Company</a></li>
                  <li><a href="/admindash">Admin</a></li>
                  <li><Link to="/dashboard">Trainers</Link></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Company Name</h3>
                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
              </div>
              <div className="col item social">
                <a href="#"><i className="icon ion-social-facebook"></i></a>
                <a href="#"><i className="icon ion-social-twitter"></i></a>
                <a href="#"><i className="icon ion-social-snapchat"></i></a>
                <a href="#"><i className="icon ion-social-instagram"></i></a>
              </div>
            </div>
            <p className="copyright">Company Name © 2018</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
