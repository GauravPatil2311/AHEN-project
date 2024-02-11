import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      contactNumber: '',
      emailAddress: '',
      panCardNumber: '',
      aadharNumber: '',
      selectedCar: '',
      selectedSlot: '',
      selectedDate: '',
      selectedTime: '',
    };
  }

  generateTimeSlots = () => {
    const timeSlots = [];
    for (let hours = 8; hours <= 22; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 30) {
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes === 0 ? '00' : minutes;
        const time = `${formattedHours}:${formattedMinutes}`;
        timeSlots.push(<option key={time}>{time}</option>);
      }
    }
    return timeSlots;
  };

  handleInputChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
    
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', this.state);
  };
  

  render() {
    const today = new Date();
    const maxEndDate = new Date(today);
    maxEndDate.setDate(today.getDate() + 30);
    return (
      <div className="Book-form-container">
        <div className="Book-form-card">
          <h2 className='Book-form-h2'>Book Your Driving Slot</h2>
          <form onSubmit={this.handleSubmit} className="booking-form">
            <div className="Book-form-group">
              <input
                type="text"
                className="Book-form-control"
                id="fullName"
                required
                value={this.state.fullName}
                onChange={this.handleInputChange}
              />
              <label htmlFor="fullName">Full Name</label>
            </div>
            <div className="Book-form-group">
              <input
                type="tel"
                className="Book-form-control"
                id="contactNumber"
                required
                value={this.state.contactNumber}
                onChange={this.handleInputChange}
              />
              <label htmlFor="contactNumber">Contact Number</label>
            </div>
            <div className="Book-form-group">
              <input
                type="email"
                className="Book-form-control"
                id="emailAddress"
                required
                value={this.state.emailAddress}
                onChange={this.handleInputChange}
              />
              <label htmlFor="emailAddress">Email Address</label>
            </div>
            <div className="Book-form-group">
              <input
                type="text"
                className="Book-form-control"
                id="panCardNumber"
                required
                value={this.state.panCardNumber}
                onChange={this.handleInputChange}
              />
              <label htmlFor="panCardNumber">PAN Card Number</label>
            </div>
            <div className="Book-form-group">
              <input
                type="text"
                className="Book-form-control"
                id="aadharNumber"
                required
                value={this.state.aadharNumber}
                onChange={this.handleInputChange}
              />
              <label htmlFor="aadharNumber">Aadhar Number</label>
            </div>
            <div className="Book-form-group">
            <select
              id="selectedCar"
              className="Book-form-control"
              required
              value={this.state.selectedCar}
              onChange={this.handleInputChange}
            >
              <option value=""></option>
              <option>Alto</option>
              <option>Swift</option>
              <option>WagonR</option>
              <option>Swift Dzire</option>
              <option>Honda City</option>
              <option>Bolero</option>
              <option>Ertiga</option>
            
            </select>
            <label htmlFor="selectedCar">Select Car</label>
          </div>

          <div className="Book-form-group">
          <label htmlFor="selectedDate">Select Start Date:</label>
          <input
            type="date"
            id="selectedDate"
            className="Book-form-control"
            required
            value={this.state.selectedDate}
            onChange={this.handleInputChange}
            min={today.toISOString().split('T')[0]} // Set the minimum date to today
          />
        </div>

        <div className="Book-form-group">
          <label htmlFor="selectedEndDate">Select End Date:</label>
          <input
            type="date"
            id="selectedEndDate"
            className="Book-form-control"
            required
            value={this.state.selectedEndDate}
            onChange={this.handleInputChange}
            min={today.toISOString().split('T')[0]}
            max={maxEndDate.toISOString().split()[0]}
          />
        </div>

            <div className="Book-form-group">
              <label htmlFor="selectedTime">Select Time:</label>
              <select
                id="selectedTime"
                className="Book-form-control"
                required
                value={this.state.selectedTime}
                onChange={this.handleInputChange}
              >
                <option value="">Choose...</option>
                {this.generateTimeSlots()}
              </select>
            </div>
            <div className="Book-form-group">
              <button type="submit" className="book-btn">
                Book Slot
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
