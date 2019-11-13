import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBCardText, MDBCol, MDBListGroupItem }
from 'mdbreact';
import axios from 'axios';
import Cookies from 'js-cookie';
import './CarCard.css'
class CarCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carId: this.props.carCard._id,
      userId: Cookies.get('userId'),
      cars: [],
     };
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/users/${this.state.userId}/cars/${this.state.carId}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {

    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          {/* <MDBCardImage className="img-fluid" src={this.car.carImage} waves /> */}
          <MDBCardBody>
            <MDBCardTitle>{this.props.carCard.adTitle}</MDBCardTitle>
            <MDBCardText>
              {this.props.carCard.adDescription}
            </MDBCardText>
              <MDBListGroupItem>Pris: {this.props.carCard.price} SEK</MDBListGroupItem>
              <MDBListGroupItem>Typ av bil: {this.props.carCard.carCategory}</MDBListGroupItem>
              <MDBListGroupItem>Märke: {this.props.carCard.carBrand}</MDBListGroupItem>
              <MDBListGroupItem>Modellår: {this.props.carCard.carModelYear}</MDBListGroupItem>
              <MDBListGroupItem>Drivmedel: {this.props.carCard.carFuel}</MDBListGroupItem>
              <MDBListGroupItem>Växellåda: {this.props.carCard.gearbox}</MDBListGroupItem>
              <MDBListGroupItem>Miltal: {this.props.carCard.mileage}</MDBListGroupItem>
              <MDBListGroupItem>Plats: {this.props.carCard.location}</MDBListGroupItem>
              <MDBListGroupItem className="hidden">Id: {this.props.carCard._id}</MDBListGroupItem>
              <form onSubmit={this.handleSubmit}>
                <MDBBtn color="btn btn-success" type="submit" className="font-weight-bold">
                  Delete annons
                </MDBBtn>
              </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default CarCard;
