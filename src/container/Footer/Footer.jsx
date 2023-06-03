import React from 'react';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <div className="logo__container">
          <img src={images.logohaku} alt='hakulogo' className="logo__img" />
          <p className="p__opensans tagline__text">
            Elevate Your Palate at Haku:
            <br />
            Where Culinary Mastery Meets Exceptional Dining.
          </p>
          <img src={images.spoon} className="spoon__img" alt='' />
        </div>
      </div>
      <div className="app__footer-links_info">
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
        </div>
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Dobrinjske Bolnice 15, Sarajevo, Bosnia and Herzegovina</p>
          <p className="p__opensans">+387131236</p>
          <p className="p__opensans">+387 632-332-578</p>
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 HAKU. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
