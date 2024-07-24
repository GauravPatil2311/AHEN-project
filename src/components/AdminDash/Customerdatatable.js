import React, { Component } from 'react';
import Customertable from './Customertable';

class Customerdatatable extends Component {
  generateRandomCustomers = () => {
    const randomCustomers = [];
    for (let i = 1; i <= 10; i++) {
      randomCustomers.push({
        customer_id: i,
        customerName: `Customer ${i}`,
        address: `Address ${i}`,
        contactNumber: `123-456-789${i}`,
        date: `2024-02-${i < 10 ? '0' + i : i}`,
        drivingSlot: `Slot ${i}`,
        bill: `${Math.floor(Math.random() * 100) + 50}`,
      });
    }
    return randomCustomers;
  };

  render() {
    const randomCustomersData = this.generateRandomCustomers();

    return (
      <div>
       
        <Customertable customersData={randomCustomersData} />
      </div>
    );
  }
}

export default Customerdatatable;
