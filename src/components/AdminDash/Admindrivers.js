import React, { Component } from 'react';
import './Admindrivers.css'; // Don't forget to create the corresponding CSS file

class Admindrivers extends Component {
  renderTableRows = () => {
    // Assume data is an array of objects with the specified properties
    const data = this.props.driversData || [];

    return data.map((driver, index) => (
      <tr key={index}>
        <td>{driver.driverID}</td>
        <td>{driver.driverName}</td>
        <td>{driver.emailAddress}</td>
        <td>{driver.contactNumber}</td>
        <td>{driver.status}</td>
        <td>{driver.totalTrips}</td>
        <td>{driver.averageRating}</td>
        <td>{driver.earnings}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div>
        <div className="driver_list-card">
          <h5>Driver Information</h5>
          <table className="drivers-table">
            <thead>
              <tr>
                <th>Driver ID</th>
                <th>Driver Name</th>
                <th>Email Address</th>
                <th>Contact Number</th>
                <th>Status</th>
                <th>Total Trips</th>
                <th>Average Rating</th>
                <th>Earnings</th>
              </tr>
            </thead>
            <tbody>{this.renderTableRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Admindrivers;
