import React, { Component } from 'react';
import Service from './Service'; 
import './Services.css'
class Services extends Component {
  render() {
    return (
      <div className='services-container'>
        
        <Service
          title="Session Booking"
          text="Book a learning session in your preferred location with our experienced instructors."
          buttonText="Book Now"
          linkTo="/Form"  
        />
        <Service
          title="Apply for Learning Licence"
          text="Start your driving journey smoothly! Apply for your learning licence with ease."
          buttonText="Apply Now"
          linkTo="/applyform"  
        />
        <Service
          title="Renew Expired License"
          text="Ensure your driving privileges stay active. Renew your expired license hassle-free with our easy renewal process."
          buttonText="Apply for Renewal"
          linkTo="/renewform"  
        />

      </div>
    );
  }
}

export default Services;
