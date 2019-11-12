import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBCardText, MDBCol, MDBListGroupItem
} from 'mdbreact';
import ContactButton from '../ContactButton';
import axios from 'axios';
class CarForSaleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carsSellers: []
     };
  }

  componentDidMount() {
    this.getAllCars();
  }

  getAllCars() {
    axios.get('http://localhost:5000/cars/')
      .then(res => {
        let sellers = res.data.map(car => car.seller);
        this.setState({
          carsSellers: sellers
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let carsSellers = this.state.carsSellers;
    const ContactButtons = <ContactButton ContactButton={carsSellers} />

    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          {/* <MDBCardImage className="img-fluid" src={this.car.carImage} waves /> */}
          <MDBCardBody>
            <MDBCardTitle>{this.props.CarForSaleCard.adTitle}</MDBCardTitle>
            <MDBCardText>
              {this.props.CarForSaleCard.adDescription}
            </MDBCardText>
              <MDBListGroupItem>Pris: {this.props.CarForSaleCard.price} SEK</MDBListGroupItem>
              <MDBListGroupItem>Typ av bil: {this.props.CarForSaleCard.carCategory}</MDBListGroupItem>
              <MDBListGroupItem>Märke: {this.props.CarForSaleCard.carBrand}</MDBListGroupItem>
              <MDBListGroupItem>Modellår: {this.props.CarForSaleCard.carModelYear}</MDBListGroupItem>
              <MDBListGroupItem>Drivmedel: {this.props.CarForSaleCard.carFuel}</MDBListGroupItem>
              <MDBListGroupItem>Växellåda: {this.props.CarForSaleCard.gearbox}</MDBListGroupItem>
              <MDBListGroupItem>Miltal: {this.props.CarForSaleCard.mileage}</MDBListGroupItem>
              <MDBListGroupItem>Plats: {this.props.CarForSaleCard.location}</MDBListGroupItem>
              {ContactButtons}
          </MDBCardBody>
        </MDBCard>
        <br />
      </MDBCol>
    );
  }
}

export default CarForSaleCard;
