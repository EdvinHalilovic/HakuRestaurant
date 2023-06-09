import React from 'react';
import{GiHamburgerMenu} from 'react-icons/gi';
import{MdOutlineRestaurantMenu} from 'react-icons/md'; 
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className='app__navbar-logo'>
      <img src={images.logohaku} alt='app logo'/> 

    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans' ><a href="#home" >Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>
  <div className='app__navbar-book'>
    <a href="/" className='p__opensans'>Book  table </a>
  </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={20} onClick={()=>{}}/> 
      </div>
      
     
      
    
    </nav>
 
);

export default Navbar;
