import React, { Component } from 'react';
import './ApplyForm.css';
import { firestore } from '../../firebase'; // Correct import path
import { collection, addDoc } from 'firebase/firestore';

class ApplyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      contactNumber: '',
      emailAddress: '',
      aadharNumber: '',
      dateOfBirth: '',
      address: '',
      pincode: '',
      district: '',
      state: '',
      selectedVehicle: '',
    };
  }

  handleInputChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleAddressChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(firestore, 'learning_license_applications'), this.state);
      console.log('Document written with ID: ', docRef.id);
      this.setState({
        fullName: '',
        contactNumber: '',
        emailAddress: '',
        aadharNumber: '',
        dateOfBirth: '',
        address: '',
        pincode: '',
        district: '',
        state: '',
        selectedVehicle: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  render() {
    return (
      <div className="ApplyForm-form-container">
        <div className="ApplyForm-form-card">
          <h2 className="ApplyForm-form-h2">Apply Form</h2>
          <form onSubmit={this.handleSubmit} className="apply-form">
            <div className="ApplyForm-form-group">
              <input
                type="text"
                className="ApplyForm-form-control"
                id="fullName"
                required
                value={this.state.fullName}
                onChange={this.handleInputChange}
              />
              <label htmlFor="fullName">Full Name</label>
            </div>
            <div className="ApplyForm-form-group">
              <input
                type="tel"
                className="ApplyForm-form-control"
                id="contactNumber"
                required
                value={this.state.contactNumber}
                onChange={this.handleInputChange}
              />
              <label htmlFor="contactNumber">Contact Number</label>
            </div>
            <div className="ApplyForm-form-group">
              <input
                type="email"
                className="ApplyForm-form-control"
                id="emailAddress"
                required
                value={this.state.emailAddress}
                onChange={this.handleInputChange}
              />
              <label htmlFor="emailAddress">Email Address</label>
            </div>
            <div className="ApplyForm-form-group">
              <input
                type="text"
                className="ApplyForm-form-control"
                id="aadharNumber"
                required
                value={this.state.aadharNumber}
                onChange={this.handleInputChange}
              />
              <label htmlFor="aadharNumber">Aadhar Number</label>
            </div>
            <div className="ApplyForm-form-group">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                className="ApplyForm-form-control"
                required
                value={this.state.dateOfBirth}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="ApplyForm-form-group">
              <label htmlFor="address" className={this.state.address ? 'floated' : ''}>
                Address:
              </label>
              <textarea
                id="address"
                className="ApplyForm-form-control"
                required
                value={this.state.address}
                onChange={this.handleAddressChange}
              ></textarea>
            </div>
            <div className="ApplyForm-form-group">
              <input
                type="text"
                className="ApplyForm-form-control"
                id="pincode"
                required
                value={this.state.pincode}
                onChange={this.handleInputChange}
              />
              <label htmlFor="pincode">Pincode</label>
            </div>
            <div className="ApplyForm-form-group">
              <input
                type="text"
                className="ApplyForm-form-control"
                id="district"
                required
                value={this.state.district}
                onChange={this.handleInputChange}
              />
              <label htmlFor="district">District</label>
            </div>
            <div className="ApplyForm-form-group">
              <input
                type="text"
                className="ApplyForm-form-control"
                id="state"
                required
                value={this.state.state}
                onChange={this.handleInputChange}
              />
              <label htmlFor="state">State</label>
            </div>
            <div className="ApplyForm-form-group">
              <select
                id="selectedVehicle"
                className="ApplyForm-form-control"
                required
                value={this.state.selectedVehicle}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option>Two  Wheelers (80cc-500cc)</option>
                <option>Four Wheelers  (800cc - 3000cc)</option>
                <option>Heavy  Duty Vehicles (Above 5000cc)</option>
              </select>
              <label htmlFor="selectedVehicle">Select Vehicle</label>
            </div>
            <div className="ApplyForm-form-group">
              <button type="submit" className="apply-btn">
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ApplyForm;
