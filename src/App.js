import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MyCarousel from './components/Carousel/Carousel';
import Locationss from './components/Booking_Location/Locationss';
import Form from './components/Booking_Location/Form';

import Services from './components/Services/Services';
import ApplyForm from './components/Apply_Learning/ApplyForm'; 
import Terms from './components/T&C/Terms';
import RenewL from './components/Renew_License/RenewL';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <hr />
          <Routes>
            <Route path="/" element={<MyCarouselPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/locationss" element={<LocationssPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Form" element={<FormPage />} />
            <Route path="/applyform" element={<ApplyFormPage />} /> 
            <Route path="/renewform" element={<RenewFormPage />} /> 
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    );
  }
}

const Home = () => <div>Home Page</div>;
const About = () => <div><Terms/></div>;
const Contact = () => <div>Contact Us Page</div>;

const MyCarouselPage = () => (
  <div>
    <MyCarousel />
  </div>
);

const ServicesPage = () => (
  <div>
    <Services />
  </div>
);

const LocationssPage = () => (
  <div>
    <Locationss />
  </div>
);

const FormPage = () => (
  <div>
    <Form />
  </div>
);

const ApplyFormPage = () => (
  <div>
    <ApplyForm />
  </div>
);

const RenewFormPage=()=>(
  <div>
    <RenewL/>
  </div>
)

export default App;