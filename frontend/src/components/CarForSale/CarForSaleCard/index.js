import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBCardText, MDBCol, MDBListGroupItem
} from 'mdbreact';
import { Link } from 'react-router-dom';

const CarForSaleCard = (props) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        {/* <MDBCardImage className="img-fluid" src={this.car.carImage} waves /> */}
        <MDBCardBody>
          <MDBCardTitle>{props.CarForSaleCard.adTitle}</MDBCardTitle>
          <MDBCardText>
            {props.CarForSaleCard.adDescription}
          </MDBCardText>
            <MDBListGroupItem>Pris: {props.CarForSaleCard.price} SEK</MDBListGroupItem>
            <MDBListGroupItem>Typ av bil: {props.CarForSaleCard.carCategory}</MDBListGroupItem>
            <MDBListGroupItem>Märke: {props.CarForSaleCard.carBrand}</MDBListGroupItem>
            <MDBListGroupItem>Modellår: {props.CarForSaleCard.carModelYear}</MDBListGroupItem>
            <MDBListGroupItem>Drivmedel: {props.CarForSaleCard.carFuel}</MDBListGroupItem>
            <MDBListGroupItem>Växellåda: {props.CarForSaleCard.gearbox}</MDBListGroupItem>
            <MDBListGroupItem>Miltal: {props.CarForSaleCard.mileage}</MDBListGroupItem>
            <MDBListGroupItem>Plats: {props.CarForSaleCard.location}</MDBListGroupItem>
          <MDBBtn href="#">kontakta säljaren</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <br />
    </MDBCol>
  )
}

export default CarForSaleCard;
