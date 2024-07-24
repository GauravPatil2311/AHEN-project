import React, { Component } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      contactNo: '',
      message: '',
      errors: {},
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, contactNo, message } = this.state;
    const errors = {};
    // Name validation (required)
    // if (!name.trim()) {
    //   errors.name = 'Name is required';
    // }
    // Email validation (required)
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }
    // Contact number validation (required, max length 13)
    if (!contactNo.trim()) {
      errors.contactNo = 'Contact number is required';
    } else if (!/^\d{10,13}$/.test(contactNo)) {
      errors.contactNo = 'Invalid contact number';
    }
    // Message validation (required, max length 400 words)
    if (!message.trim()) {
      errors.message = 'Message is required';
    } else if (message.trim().split(/\s+/).length > 400) {
      errors.message = 'Message should not exceed 400 words';
    }
    if (Object.keys(errors).length === 0) {
      // Form submission logic goes here
      console.log('Form submitted:', { name, email, contactNo, message });
      // Reset form fields
      this.setState({ name: '', email: '', contactNo: '', message: '', errors: {} });
    } else {
      this.setState({ errors });
    }
  };






  render() {
    const { name, email, contactNo, message, errors } = this.state;
    return (
      <div className='contactContainer'>
       <div className='contact-left'>      
          <h1 className='Heading1'>Contact Us</h1>
          <div className='contactinfo'>
            
          
            <ul>
              <li><span >Address : <div className='Info'>H- block Autocluster, Pimpri, <br></br>Pune-
411019</div></span> 
              </li>
              <li><span>Contact : <div className='Info'>+919325262490</div></span> 
               </li> 
                     
              </ul> 
              <div className='Social-icons'>
  {/* <h4>Connect with us</h4> */}
  <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
  <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
  <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
  <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
</div>      
                
            </div>
       </div>
       <div className='contact-right'>
       <div className='contactForm'>
          <form onSubmit={this.handleSubmit}>           
            <div className='inputBox'>
              <input type='text' name='name' value={name} onChange={this.handleChange} required='required'/>
              <span>NAME </span>
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className='inputBox'>
                <input type='email' name='email' value={email} onChange={this.handleChange} required />
                <span>EMAIL </span>
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className='inputBox'>
                <input type='text' name='contactNo' value={contactNo} onChange={this.handleChange} required />
                <span>CONTACT NO </span>
                {errors.contactNo && (
  <div className={`error ${errors.contactNo === 'Invalid contact number' ? 'invalid-contact-number' : '' }`} >
    {errors.contactNo} 
  </div>
)}

              </div>
              <div className='inputBox'>
                <textarea name='message' value={message} onChange={this.handleChange} required />
                <span>MESSAGE </span>
                {errors.message && <span className="error">{errors.message}</span>}
              </div>
            <button type="submit"><b>SEND</b> </button>
          </form>
          </div>
          </div>
          <div className='clear'></div>
      </div>
    );
  }
}
export default ContactUs;
