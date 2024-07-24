import React, { Component } from 'react';
import './Todayssession.css';

class Todayssession extends Component {
  renderTableRows = () => {
    // Assume data is an array of objects with Name, Contact Number, Pick Up Location, Slot Time properties
    const data = this.props.sessionData || [];

    return data.map((session, index) => (
      <tr key={index}>
        <td>{session.name}</td>
        <td>{session.contactNumber}</td>
        <td>{session.pickUpLocation}</td>
        <td>{session.slotTime}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div>
        <div className="wide-card">
          <h5>Today's Sessions</h5>
          <table className="session-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Pick Up Location</th>
                <th>Slot Time</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableRows()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Todayssession;
