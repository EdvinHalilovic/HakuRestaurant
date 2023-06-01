import React from 'react';
import {images} from '../../constants';
import './Header.css';
import {SubHeading} from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour'/>
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}></p>
    </div>
    <div className='app__wrapper_img'></div>
   
  </div>
);

export default Header;