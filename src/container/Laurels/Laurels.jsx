import React from 'react';
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt='awards' />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award, index) => (
          <AwardCard
            award={award}
            key={award.title}
            imgUrl={
              index === 0 ? images.award01 :
              index === 1 ? images.award02 :
              index === 2 ? images.award03 :
              images.award05
            }
          />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.pita} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
