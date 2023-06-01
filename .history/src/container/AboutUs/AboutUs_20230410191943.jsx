import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center' >
      <img src={images.restoran} alt="g letter"  style={{width: '45%', height: 'auto',marginTop: '-120px'}}/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img' />
        <p className='p__opensans'>Restoran "Haku" bio je osnovan prije dvadeset godina u srcu Sarajeva. Osnovali su ga dva dugogodišnja prijatelja, Halilovic Edvin i Kurtalija Sanjin i po tome se dobio naziv HaKu, koji su oduvijek sanjali o stvaranju mjesta gdje će ljudi moći uživati u jedinstvenom iskustvu fine  kuhinje. Njihova strast prema tradicionalnoj hrani bila je neprocjenjiva, a njihove vještine u kuhanju bile su savršene.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
    <div className='app__aboutus-content_knife flex_center'>
    <img src={images.knife} alt="about_knife"  />
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img'  />
        <p className='p__opensans'>Haku je porodična firma koja se nalazi u Sarajevu, na adresi Dobrinjske bolnice 15. Naš restoran nudi širok izbor evropske hrane, ali naša specijalnost su pite, ćevapi i šnicl od sira. Naši recepti su naslijeđeni iz generacija i koristimo samo najkvalitetnije sastojke kako bismo osigurali najbolji ukus. Naša misija je da naši gosti uživaju u vrhunskoj hrani i da se osjećaju kao dio naše porodice dok su u našem restoranu. Dobrodošli u Haku!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
