// Dashcards.jsx

import React, { Component } from 'react';
import Maincard from './Maincard'; // Import the Maincard component
import'./Dashcards.css'
import { FaBusinessTime } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { IoWallet } from "react-icons/io5";
class Dashcards extends Component {
  render() {
    const completed = {
      cardTitle: 'Completed Sessions',
      cardIcon: <FaCar />, // Add your progress icon class here
      cardValue: '20',
      progressBarWidth: '77%',
      progressText: '77% Completed',
    };

    const upcoming = {
      cardTitle: 'Upcoming Sessions',
      cardIcon: <FaBusinessTime /> ,// Add your management icon class here
      cardValue: '6',
      progressBarWidth: '100%',
      // progressText: '100% Progress',
    };

    const paymentsCardData = {
      cardTitle: 'Total Earnings',
      cardIcon: <BsCash />, 
      cardValue: 'Rs.3000',
      progressBarWidth: '100%',
      // progressText: '50% Progress',
    };

    const earningsCardData = {
      cardTitle: 'Today' + '\'s' + ' Earnings',
      cardIcon: <IoWallet />, // Add your earnings icon class here
      cardValue: 'Rs.1200',
      progressBarWidth: '100%',
      // progressText: '75% Progress',
    };

    return (
      <div className='dash-cards'>
       <Maincard {...completed} className='completed-card' />
        <Maincard {...upcoming} className='upcoming-card' />
        <Maincard {...paymentsCardData} className='payments-card' />
        <Maincard {...earningsCardData} className='earnings-card' />
      </div>
    );
  }
}

export default Dashcards;
