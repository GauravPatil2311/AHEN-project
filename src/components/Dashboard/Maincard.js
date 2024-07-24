// Maincard.jsx

import React, { Component } from 'react';
import './Maincard.css';  // Import the Maincard.css file

class Maincard extends Component {
  render() {
    const { cardTitle, cardIcon, cardValue, progressBarWidth, progressText, className } = this.props;

    return (
      <div className={`main-card ${className}`}>
        <div className="dash-card-header">
          <h6>{cardTitle}</h6>
          <div className="icon-container">
            {cardIcon && <span className="card_icon">{cardIcon}</span>}
          </div>
        </div>

        {/* Value */}
        <span className="main-card-value">{cardValue}</span>

        {/* Progress Bar */}
        <div className="main-card_progress-bar">
  <div className="main-card_progress" style={{ width: progressBarWidth }}></div>
</div>

        {/* Progress Percentage Text */}
        <span className="main-card_progress-text">{progressText}</span>
      </div>
    );
  }
}

export default Maincard;
