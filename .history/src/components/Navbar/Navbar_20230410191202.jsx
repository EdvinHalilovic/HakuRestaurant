import React,{useState} from 'react';
import{GiHamburgerMenu} from 'react-icons/gi';
import{MdOutlineRestaurantMenu} from 'react-icons/md'; 
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const[toggleMenu,setToggleMenu]=useState(false);
  return(
  <nav className="app__navbar">
    <div className='app__navbar-logo'>
      <img src={images.logohaku} alt='app logo' style={{width: 'auto', height: 'auto'}}/> 

    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans' ><a href="#home" >Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>
  <div className='app__navbar-book'>
    <a href="login" className='p__opensans'>Book  table </a>
  </div>
 
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff ' fontSize={27} onClick={()=>setToggleMenu(true)}> </GiHamburgerMenu>
      {toggleMenu &&(
      <div className='app__navbar-smallscreen__overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}></MdOutlineRestaurantMenu>
        <ul className='app__navbar-smallscreen-links'>
      <li className='p__opensans' ><a href="#home" >Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul> 
      </div>
     )}
      
    </div>
    </nav>
 
)
  }

export default Navbar;



