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
          <MDBListGroupItem>Pris: {props.CarForSaleCard.price} SEK</MDBListGroupItem>
          <Link to="/add-car">
          <MDBBtn color="btn btn-success" className="font-weight-bold">Se hela annonsen</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CarForSaleCard;
