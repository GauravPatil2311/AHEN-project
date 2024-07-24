import React, { Component } from 'react';
import Todayssession from './Todayssession';

class Todayssessions extends Component {
  render() {
    // Example data for Todayssession
    const sessionData = [
      {
        name: 'Jack Martin',
        contactNumber: '8647982134',
        pickUpLocation: 'Main Street',
        slotTime: '10:00 AM - 11:00 AM',
      },
      {
        name: 'Tonny Stark',
        contactNumber: '123-456-7890',
        pickUpLocation: 'Main Street',
        slotTime: '10:00 AM - 11:00 AM',
      },
      {
        name: 'John Doe',
        contactNumber: '123-456-7890',
        pickUpLocation: 'Main Street',
        slotTime: '10:00 AM - 11:00 AM',
      },
      {
        name: 'John Doe',
        contactNumber: '123-456-7890',
        pickUpLocation: 'Main Street',
        slotTime: '10:00 AM - 11:00 AM',
      },
      {
        name: 'John Doe',
        contactNumber: '123-456-7890',
        pickUpLocation: 'Main Street',
        slotTime: '10:00 AM - 11:00 AM',
      },
      {
        name: 'John Doe',
        contactNumber: '123-456-7890',
        pickUpLocation: 'Main Street',
        slotTime: '10:00 AM - 11:00 AM',
      },
      
    ];

    return (
      <div>
      
        <Todayssession sessionData={sessionData} />
      </div>
    );
  }
}

export default Todayssessions;
