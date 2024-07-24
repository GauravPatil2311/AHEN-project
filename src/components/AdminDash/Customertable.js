import React, { Component } from 'react';
import './Customertable.css'; // Don't forget to create the corresponding CSS file

class Customertable extends Component {
  renderTableRows = () => {
    // Assume data is an array of objects with the specified properties
    const data = this.props.customersData || [];

    return data.map((customer, index) => (
      <tr key={index}>
        <td>{customer.customer_id}</td>
        <td>{customer.customerName}</td>
        <td>{customer.address}</td>
        <td>{customer.contactNumber}</td>
        <td>{customer.date}</td>
        <td>{customer.drivingSlot}</td>
        <td>{customer.bill}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div>
        <div className="customer_list-card">
          <h5>Customer Information</h5>
          <table className="customers-table">
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Date</th>
                <th>Driving Slot</th>
                <th>Bill</th>
              </tr>
            </thead>
            <tbody>{this.renderTableRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Customertable;
