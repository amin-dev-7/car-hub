import React from 'react';
import heroImg from '../../assets/images/hero-img.png'
import HomeCard from './HomeCard'
import {MDBCardImage} from 'mdbreact';

const HeroCard = () => {
  return (
    <div>
      <MDBCardImage className="img-fluid" src={heroImg} waves />
      <HomeCard
        title="Hitta din bil"
        text="På Car hub hittar du din framtida bil snabbt och enkelt"
        btn="Hitta din nya bil"
        link="/car-for-sale"
      />
      <HomeCard
        title="LÄGG IN DIN ANNONS"
        text="Lägg in din bilanons och få din bil sålt smidigt"
        btn="Lägg in annons"
        link="/add-car"
      />
    </div>
  );
}

export default HeroCard;
