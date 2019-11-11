import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBCardText, MDBCol, MDBListGroupItem }
from 'mdbreact';

function Car(props) {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        {/* <MDBCardImage className="img-fluid" src={this.car.carImage} waves /> */}
        <MDBCardBody>
          <MDBCardTitle>{props.car.adTitle}</MDBCardTitle>
          <MDBCardText>
            {props.car.adDescription}
          </MDBCardText>
            <MDBListGroupItem>Pris: {props.car.price} SEK</MDBListGroupItem>
            <MDBListGroupItem>Typ av bil: {props.car.carCategory}</MDBListGroupItem>
            <MDBListGroupItem>Märke: {props.car.carBrand}</MDBListGroupItem>
            <MDBListGroupItem>Modellår: {props.car.carModelYear}</MDBListGroupItem>
            <MDBListGroupItem>Drivmedel: {props.car.carFuel}</MDBListGroupItem>
            <MDBListGroupItem>Växellåda: {props.car.gearbox}</MDBListGroupItem>
            <MDBListGroupItem>Miltal: {props.car.mileage}</MDBListGroupItem>
            <MDBListGroupItem>Plats: {props.car.location}</MDBListGroupItem>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Car;
