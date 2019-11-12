import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBCardText, MDBCol, MDBListGroupItem }
from 'mdbreact';

const CarCard = (props) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        {/* <MDBCardImage className="img-fluid" src={this.car.carImage} waves /> */}
        <MDBCardBody>
          <MDBCardTitle>{props.carCard.adTitle}</MDBCardTitle>
          <MDBCardText>
            {props.carCard.adDescription}
          </MDBCardText>
            <MDBListGroupItem>Pris: {props.carCard.price} SEK</MDBListGroupItem>
            <MDBListGroupItem>Typ av bil: {props.carCard.carCategory}</MDBListGroupItem>
            <MDBListGroupItem>Märke: {props.carCard.carBrand}</MDBListGroupItem>
            <MDBListGroupItem>Modellår: {props.carCard.carModelYear}</MDBListGroupItem>
            <MDBListGroupItem>Drivmedel: {props.carCard.carFuel}</MDBListGroupItem>
            <MDBListGroupItem>Växellåda: {props.carCard.gearbox}</MDBListGroupItem>
            <MDBListGroupItem>Miltal: {props.carCard.mileage}</MDBListGroupItem>
            <MDBListGroupItem>Plats: {props.carCard.location}</MDBListGroupItem>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CarCard;
