import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div className="container1">
        <div id="boxA" className="box">
          Download Ahen App from Playstore
        </div>
        <div id="boxB" className="box">
          Book your first driving class here
        </div>
        <div id="boxC" className="box">
          What is AHEN ?
        </div>
        <div id="boxD" className="box">
          24 hrs Service available.
        </div>
      </div>
    );
  }
}

export default Box;
