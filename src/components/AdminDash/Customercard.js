// Customercard.jsx

import React, { Component } from 'react';
import Maincard from '../Dashboard/Maincard';
import { IoPeople } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaUserClock } from "react-icons/fa6";
import { IoCash } from "react-icons/io5";
import './Customercard.css'; // Import the styling for Customercard
// import { YourCustomerIcon1, YourCustomerIcon2, YourCustomerIcon3, YourCustomerIcon4 } from "path-to-your-customer-icons";

class Customercard extends Component {
  render() {
    const totalCustomersCardData = {
      cardTitle: 'Total Customers',
      cardIcon: <IoPeople />, 
      cardValue: '500',
      progressBarWidth: '75%', // Adjust the percentage based on your design
      // progressText: '75% of capacity used',
    };

    const todaysCustomersCardData = {
      cardTitle: "Today's Customers",
      // Assuming you have an icon for today's customers
        cardIcon: <IoPerson />, 
      cardValue: '200',
      progressBarWidth: '50%', // Adjust the percentage based on your design
      progressText: '50% today',
    };

    const pendingCardData = {
      cardTitle: 'Pending',
      // Assuming you have an icon for pending
        cardIcon: <FaUserClock />, 
      cardValue: '20',
      progressBarWidth: '20%', // Adjust the percentage based on your design
      progressText: '20% pending',
    };

    const totalBillCardData = {
      cardTitle: 'Total Bill',
      // Assuming you have an icon for total bill
        cardIcon: <IoCash />, 
      cardValue: 'RS.10,000',
      progressBarWidth: '90%', // Adjust the percentage based on your design
      progressText: '90% paid',
    };

    return (
      <div className='customercards-container'>
        <Maincard {...totalCustomersCardData} className='total-customers-card' />
        <Maincard {...todaysCustomersCardData} className='todays-customers-card' />
        <Maincard {...pendingCardData} className='pending-card' />
        <Maincard {...totalBillCardData} className='total-bill-card' />
      </div>
    );
  }
}

export default Customercard;
