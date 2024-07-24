// Admindriverscard.jsx

import React, { Component } from 'react';
import Maincard from '../Dashboard/Maincard';
import './Admindriverscard.css'; // Import the styling for Admindriverscard
import { GiSteeringWheel } from "react-icons/gi";
import { RiSteering2Fill } from "react-icons/ri";
import { RiSteering2Line } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";

class Admindriverscard extends Component {
  render() {
    const totalDriversCardData = {
    cardTitle: 'Total Drivers',
    // Assuming you have an icon for drivers
    cardIcon: <GiSteeringWheel />, 
    cardValue: '100',
    progressBarWidth: '100%', // Adjust the percentage based on your design
    // progressText: '65% of capacity used',
    };

    const activeDriversCardData = {
      cardTitle: 'Active Drivers',
      // Assuming you have an icon for active drivers
      cardIcon: <RiSteering2Fill />, 
      cardValue: '65',
      progressBarWidth: '65%', // Adjust the percentage based on your design
      progressText: '65% are busy',
    };

    const availableDriversCardData = {
      cardTitle: 'Available Drivers',
      // Assuming you have an icon for available drivers
      cardIcon: <RiSteering2Line />, 
      cardValue: '35',
      progressBarWidth: '35%', // Adjust the percentage based on your design
      progressText: '35% available',
    };

    const paymentStatusCardData = {
      cardTitle: 'Payment Status',
      // Assuming you have an icon for payment status
      cardIcon: <MdOutlinePayment />, 
      cardValue: '48',
      progressBarWidth: '48%', // Adjust the percentage based on your design
      progressText: '24% paid on time',
    };

    return (
      <div className='admindrivers-cards'>
        <Maincard {...totalDriversCardData} className='total-drivers-card' />
        <Maincard {...activeDriversCardData} className='active-drivers-card' />
        <Maincard {...availableDriversCardData} className='available-drivers-card' />
        <Maincard {...paymentStatusCardData} className='payment-status-card' />
      </div>
    );
  }
}

export default Admindriverscard;
