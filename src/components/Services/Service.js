import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Service.css'; // Import the Service.css styling file

const Service = ({ title, text, buttonText, linkTo }) => {
  return (
    <div className="service-card" style={{ width: '18rem' }}>
      <div className="service-card-body">
       
        <h5 className="service-card-title">{title}</h5>
        <hr className='service-hr'/>
        <p className="service-card-text">{text}</p>
        <Link to={linkTo} className="service-btn">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Service;
