import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ title, text, buttonText, linkTo }) => {
  return (
    <Link to={linkTo} className="service-link" style={{ textDecoration: 'none' }}>
      <div className="service-card" style={{ width: '18rem' }}>
        <div className="service-card-body">
          <h5 className="service-card-title">{title}</h5>
          <hr className="service-hr" />
          <p className="service-card-text">{text}</p>
          <button className="service-btn custom-btn" aria-hidden="true">
            {buttonText}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Service;
