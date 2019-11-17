import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBCardText, MDBCol, MDBListGroupItem }
from 'mdbreact';
import './CarCard.css'
class CarCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

     };
  }

  render() {
    let fullDate = this.props.carCard.updatedAt;
    let date = fullDate.substr(0, 10);

    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid"
           src={`http://localhost:5000/uploads/${this.props.carCard.carImage}`} waves />
          <MDBCardBody>
            <MDBCardTitle>{this.props.carCard.adTitle}</MDBCardTitle>
            <MDBCardText>
              {this.props.carCard.adDescription}
            </MDBCardText>
              <MDBListGroupItem className="d-flex">
                Inlagd : {date}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Pris: {this.props.carCard.price} SEK</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Typ av bil: {this.props.carCard.carCategory}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Märke: {this.props.carCard.carBrand}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Modellår: {this.props.carCard.carModelYear}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Drivmedel: {this.props.carCard.carFuel}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Växellåda: {this.props.carCard.gearbox}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Miltal: {this.props.carCard.mileage}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Plats: {this.props.carCard.location}</MDBListGroupItem>
              <MDBListGroupItem className="hidden">
                Id: {this.props.carCard._id}</MDBListGroupItem>
                <Link to={'/car-card/' + this.props.carCard._id}>
                  <MDBBtn
                    color="btn btn-success" type="submit" className="font-weight-bold">
                    hantera annons
                  </MDBBtn>
                </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default CarCard;

