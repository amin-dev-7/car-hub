import React from 'react';
import API from '../../../users-api';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBCardText, MDBCol, MDBListGroupItem }
from 'mdbreact';
import Cookies from 'js-cookie';
import './CarCard.css'
class CarCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carId: this.props.carCard._id,
      userId: Cookies.get('userId'),
      cars: []
     };
     this.handleSubmit = this.handleSubmit.bind(this);
     this.onClick = this.onClick.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    API.delete(`${this.state.userId}/cars/${this.state.carId}`)
      .then(res => {
        console.log(res.data);
      })
  }

  onClick = () => {
    setTimeout(() => {
      window.location.reload(false)
    }, 500);
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
              <form onSubmit={this.handleSubmit}>
                <MDBBtn onClick={this.onClick}
                  color="btn btn-success" type="submit" className="font-weight-bold">
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
