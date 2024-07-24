import React, { Component } from 'react';
import Admindrivers from './Admindrivers'; // Make sure to provide the correct path

export class Admindriverslist extends Component {
  generateRandomData = () => {
    const randomData = [];

    for (let i = 1; i <= 10; i++) {
      randomData.push({
        driverID: `D${i}`,
        driverName: `Driver ${i}`,
        emailAddress: `driver${i}@example.com`,
        contactNumber: `123-456-${i}000`,
        status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'On Leave' : 'Available',

        totalTrips: Math.floor(Math.random() * 100),
        averageRating: (Math.random() * (5 - 3) + 3).toFixed(2), // Random rating between 3 and 5
        earnings: `${Math.floor(Math.random() * 1000)}`
      });
    }

    return randomData;
  };

  render() {
    const randomData = this.generateRandomData();

    return (
      <div>
       
        <Admindrivers driversData={randomData} />
      </div>
    );
  }
}

export default Admindriverslist;
