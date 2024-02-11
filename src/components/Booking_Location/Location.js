import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Location.css'; 

class Location extends Component {
  render() {
    const { locationName } = this.props;

    return (
      <div className="location-card">
        <div className="location-card-body">
          <h5 className="location-card-title">{locationName}</h5>
          <hr className="location-hr" />
          <Link to="/Form">
            <button className="location-btn">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Location;
