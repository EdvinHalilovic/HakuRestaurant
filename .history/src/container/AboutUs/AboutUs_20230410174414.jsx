import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img' />
        <p className='p__opensans'>Restoran "Haku" bio je osnovan prije dvadeset godina u srcu Sarajeva. Osnovali su ga dva dugogodišnja prijatelja, Halilovic Edvin i Kurtalija Sanjin i po tome se dobio naziv HaKu, koji su oduvijek sanjali o stvaranju mjesta gdje će ljudi moći uživati u jedinstvenom iskustvu fine  kuhinje. Njihova strast prema tradicionalnoj hrani bila je neprocjenjiva, a njihove vještine u kuhanju bile su savršene.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
