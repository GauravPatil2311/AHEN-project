import React, { useState } from 'react';
import './Form.css';
import { firestore } from '../../firebase'; // Correct the import path
import { collection, addDoc } from 'firebase/firestore';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    emailAddress: '',
    panCardNumber: '',
    aadharNumber: '',
    selectedCar: '',
    selectedDate: '',
    selectedEndDate: '',
    selectedTime: '',
  });

  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hours = 8; hours <= 22; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 30) {
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes === 0 ? '00' : minutes;
        const time = `${formattedHours}:${formattedMinutes}`;
        timeSlots.push(<option key={time} value={time}>{time}</option>);
      }
    }
    return timeSlots;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(firestore, 'bookings'), formData);
      console.log('Document written with ID: ', docRef.id);
      setFormData({
        fullName: '',
        contactNumber: '',
        emailAddress: '',
        panCardNumber: '',
        aadharNumber: '',
        selectedCar: '',
        selectedDate: '',
        selectedEndDate: '',
        selectedTime: '',
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const today = new Date();
  const maxEndDate = new Date(today);
  maxEndDate.setDate(today.getDate() + 30);

  return (
    <div className="Book-form-container">
      <div className="Book-form-card">
        <h2 className="Book-form-h2">Book Your Driving Slot</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="Book-form-group">
            <input
              type="text"
              className="Book-form-control"
              id="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <label htmlFor="fullName">Full Name</label>
          </div>
          <div className="Book-form-group">
            <input
              type="tel"
              className="Book-form-control"
              id="contactNumber"
              required
              value={formData.contactNumber}
              onChange={handleInputChange}
            />
            <label htmlFor="contactNumber">Contact Number</label>
          </div>
          <div className="Book-form-group">
            <input
              type="email"
              className="Book-form-control"
              id="emailAddress"
              required
              value={formData.emailAddress}
              onChange={handleInputChange}
            />
            <label htmlFor="emailAddress">Email Address</label>
          </div>
          <div className="Book-form-group">
            <input
              type="text"
              className="Book-form-control"
              id="panCardNumber"
              required
              value={formData.panCardNumber}
              onChange={handleInputChange}
            />
            <label htmlFor="panCardNumber">PAN Card Number</label>
          </div>
          <div className="Book-form-group">
            <input
              type="text"
              className="Book-form-control"
              id="aadharNumber"
              required
              value={formData.aadharNumber}
              onChange={handleInputChange}
            />
            <label htmlFor="aadharNumber">Aadhar Number</label>
          </div>
          <div className="Book-form-group">
            <select
              id="selectedCar"
              className="Book-form-control"
              required
              value={formData.selectedCar}
              onChange={handleInputChange}
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
              value={formData.selectedDate}
              onChange={handleInputChange}
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
              value={formData.selectedEndDate}
              onChange={handleInputChange}
              min={today.toISOString().split('T')[0]}
              max={maxEndDate.toISOString().split('T')[0]}
            />
          </div>

          <div className="Book-form-group">
            <label htmlFor="selectedTime">Select Time:</label>
            <select
              id="selectedTime"
              className="Book-form-control"
              required
              value={formData.selectedTime}
              onChange={handleInputChange}
            >
              <option value="">Choose...</option>
              {generateTimeSlots()}
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
};

export default Form;
