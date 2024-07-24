// Homep.js

import React, { Component } from 'react';
import MyCarousel from '../Carousel/Carousel';
import Box from './Box';
import "./Homep.css";

class Homep extends Component {
  render() {
    return (
      <div className='Homepage_contents'>
        <MyCarousel />
        <Box />
        <div className="image-container">
          <img src="/images/img1.png" alt="Description of the image" />
        </div>
      </div>
    );
  }
}

export default Homep;
