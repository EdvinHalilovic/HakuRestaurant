import React from 'react';
import {images} from '../../constants';
import './Header.css';
import {SubHeading} from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour'/>
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>One of the best pizza restaruant in Sarajevo.Enjoy in a good atmposphere and amazing food.We cant wait to see you.As our moto says.A recipe has no soul. You, as the cook, must bring soul to the recipe.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'></div>
    <img src={images.welcome} alt="header img" />
   
  </div>
);

export default Header;
