import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => {
  const handleExploreMenu = () => {
    // Navigate to the menu page
    // You can use a routing library or any other navigation mechanism of your choice
    window.location.href = '#menu';
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          One of the best pizza restaurants in Sarajevo. Enjoy in a good atmosphere and amazing food. We can't wait to see
          you. As our motto says, "A recipe has no soul. You, as the cook, must bring soul to the recipe."
        </p>
        <button type="button" className="custom__button" onClick={handleExploreMenu}>
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img"></div>
      <img src={images.riza} alt="header img" style={{ width: '40%', height: 'auto' }} />
    </div>
  );
};

export default Header;
