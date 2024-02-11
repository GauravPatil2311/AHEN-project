// Terms.js
import React, { Component } from 'react';

class Terms extends Component {
  render() {
    return (
    <div className="terms-container">
        <div className="terms-content">
            <h1>Terms and Conditions</h1>

            <p>Welcome to our Driving School! Before you proceed, please read the following terms and conditions carefully. By accessing or using our services, you agree to comply with and be bound by these terms. If you disagree with any part of the terms, you may not access our services.</p>

            <p>To use our services, you must be at least 18 years old and possess the legal authority to enter into this agreement.</p>

            <p>You are responsible for maintaining the confidentiality of your account and password. Notify us immediately if you suspect any unauthorized use of your account.</p>

            <p>Our driving courses are designed to provide comprehensive training. Completion of the course does not guarantee a driver's license.</p>

            <p>Payment for our services is required in advance. Fees are non-refundable, except as expressly stated in our refund policy.</p>

            <p>Respectful behavior is expected during all interactions. Any violation of our code of conduct may result in the termination of services.</p>

            <p>We reserve the right to modify or replace these terms at any time. Your continued use of our services constitutes acceptance of the updated terms.</p>

            <p className="important-note">Note: The above terms are subject to change, and it is your responsibility to review them regularly.</p>

            <div className="agree-btn-container">
                <button className="agree-btn">I Agree</button>
            </div>
        </div>
    </div>
    );
  }
}

export default Terms;
