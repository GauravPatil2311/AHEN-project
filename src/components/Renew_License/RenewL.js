import React, { Component } from 'react';
import './RenewL.css';
import { firestore } from '../../firebase'; // Correct import path
import { collection, addDoc } from 'firebase/firestore';

class RenewL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      contactNumber: '',
      emailAddress: '',
      aadharNumber: '',
      currentLicenseId: '',
      dateOfBirth: '',
      licenseExpiryDate: '',
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
    this.handleFloatingLabel(id, value);
  };

  handleFloatingLabel = (id, value) => {
    const label = document.querySelector(`label[for=${id}]`);
    if (value === '' && id !== 'address') {
      label.classList.remove('floated');
    } else {
      label.classList.add('floated');
    }
  };

  handleAddressChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
    this.handleFloatingLabel(id, value);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(firestore, 'license_renew_applications'), this.state);
      console.log('Document written with ID: ', docRef.id);
      this.setState({
        fullName: '',
        contactNumber: '',
        emailAddress: '',
        aadharNumber: '',
        currentLicenseId: '',
        dateOfBirth: '',
        licenseExpiryDate: '',
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
      <div className="RenewL-form-container">
        <div className="RenewL-form-card">
          <h2 className="RenewL-form-h2">License Renewal Form</h2>
          <form onSubmit={this.handleSubmit} className="renewal-form">
            <div className="RenewL-form-group">
              <input
                type="text"
                className="RenewL-form-control"
                id="fullName"
                required
                value={this.state.fullName}
                onChange={this.handleInputChange}
              />
              <label htmlFor="fullName">Full Name</label>
            </div>
            <div className="RenewL-form-group">
              <input
                type="tel"
                className="RenewL-form-control"
                id="contactNumber"
                required
                value={this.state.contactNumber}
                onChange={this.handleInputChange}
              />
              <label htmlFor="contactNumber">Contact Number</label>
            </div>
            <div className="RenewL-form-group">
              <input
                type="email"
                className="RenewL-form-control"
                id="emailAddress"
                required
                value={this.state.emailAddress}
                onChange={this.handleInputChange}
              />
              <label htmlFor="emailAddress">Email Address</label>
            </div>
            <div className="RenewL-form-group">
              <input
                type="text"
                className="RenewL-form-control"
                id="aadharNumber"
                required
                value={this.state.aadharNumber}
                onChange={this.handleInputChange}
              />
              <label htmlFor="aadharNumber">Aadhar Number</label>
            </div>
            <div className="RenewL-form-group">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                className="RenewL-form-control"
                required
                value={this.state.dateOfBirth}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="RenewL-form-group">
              <input
                type="text"
                className="RenewL-form-control"
                id="currentLicenseId"
                required
                value={this.state.currentLicenseId}
                onChange={this.handleInputChange}
              />
              <label htmlFor="currentLicenseId">Current License ID</label>
            </div>
            <div className="RenewL-form-group">
              <label htmlFor="licenseExpiryDate">License Expiry Date:</label>
              <input
                type="date"
                id="licenseExpiryDate"
                className="RenewL-form-control"
                required
                value={this.state.licenseExpiryDate}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="RenewL-form-group">
              <label htmlFor="address" className={this.state.address ? 'floated' : ''}>
                Address:
              </label>
              <textarea
                id="address"
                className="RenewL-form-control"
                required
                value={this.state.address}
                onChange={this.handleAddressChange}
              ></textarea>
            </div>

            <div className="RenewL-form-group">
              <input
                type="text"
                className="RenewL-form-control"
                id="pincode"
                required
                value={this.state.pincode}
                onChange={this.handleInputChange}
              />
              <label htmlFor="pincode">Pincode</label>
            </div>
            <div className="RenewL-form-group">
              <input
                type="text"
                className="RenewL-form-control"
                id="district"
                required
                value={this.state.district}
                onChange={this.handleInputChange}
              />
              <label htmlFor="district">District</label>
            </div>
            <div className="RenewL-form-group">
              <input
                type="text"
                className="RenewL-form-control"
                id="state"
                required
                value={this.state.state}
                onChange={this.handleInputChange}
              />
              <label htmlFor="state">State</label>
            </div>
            <div className="RenewL-form-group">
              <select
                id="selectedVehicle"
                className="RenewL-form-control"
                required
                value={this.state.selectedVehicle}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option>Car Model 1</option>
                <option>Car Model 2</option>
                <option>Car Model 3</option>
                {/* Add more options for different vehicle models */}
              </select>
              <label htmlFor="selectedVehicle">Select Vehicle</label>
            </div>

            <div className="RenewL-form-group">
              <button type="submit" className="renew-btn">
                Renew License
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RenewL;

