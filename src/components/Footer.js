import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../style/homefooter.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span>About the company</span> Ut congue augue non tellus bibendum,
           in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend.
        </p>
        <div className="icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div className='footer-details-section'>
          <FontAwesomeIcon icon={faMapMarker} />
          <span className='footer-address-cont'>House No. 276 Sector 54 Gurugram Haryana</span> 
        </div>
        <div className='footer-details-section'>
          <FontAwesomeIcon icon={faPhone} />
          <span className='footer-mobile-cont'>(+00) 0000 000 000</span>
        </div>
        <div className='footer-details-section'>
          <FontAwesomeIcon icon={faEnvelope} />
          <span className='footer-mail-section'><a href="mailto:office@company.com">office@company.com</a></span>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <span className='footer-logo-section'>Credit Card</span>
        <p className="menu">
          <a href="#">Home</a> | 
          <a href="#">&nbsp; About</a> | 
          <a href="#">&nbsp;Services</a> |
          <a href="#">&nbsp;Portfolio</a> |
          <a href="#">&nbsp;News</a> |
          <a href="#">&nbsp;Contact</a>
        </p>
        <p className="name">Card Company &copy; 2016</p>
      </div>
    </footer>
  );
};

export default Footer;
