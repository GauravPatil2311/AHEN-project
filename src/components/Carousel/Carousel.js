import React, { Component } from 'react';
import './Carousel.css';

class MyCarousel extends Component {
  render() {
    const imageUrl1 = `${process.env.PUBLIC_URL}/images/ahenbg.jpg`;
    const imageUrl2 = `${process.env.PUBLIC_URL}/images/ahenbg1.jpg`;
    const imageUrl3 = `${process.env.PUBLIC_URL}/images/ahenbg2.jpg`;

    return (
      <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div id="Heading">
         
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imageUrl1} className="d-block w-100" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src={imageUrl2} className="d-block w-100" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src={imageUrl3} className="d-block w-100" alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default MyCarousel;
