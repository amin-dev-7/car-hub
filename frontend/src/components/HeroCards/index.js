import React from 'react';
import heroImg from '../../assets/images/hero-img.png';
import HomeCard from './HomeCard';
import {MDBRow, MDBCol} from 'mdbreact';

const HeroCard = () => {
  return (
    <div>
      <MDBRow className="mb-4">
        <MDBCol md="4">
          <img src={heroImg} className="img-fluid" alt="" />
        </MDBCol>
      </MDBRow>
      <HomeCard
        title="HITTA DIN BIL"
        text="På Car hub hittar du din framtida bil snabbt och enkelt"
        btn="Hitta din nya bil"
        link="/car-for-sale"
      />
      <hr></hr>
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
