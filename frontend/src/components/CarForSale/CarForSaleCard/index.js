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

    let fullDate = this.props.CarForSaleCard.updatedAt;
    let date = fullDate.substr(0, 10)

    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          {/* <MDBCardImage className="img-fluid" src={this.car.carImage} waves /> */}
          <MDBCardBody>
            <MDBCardTitle>{this.props.CarForSaleCard.adTitle}</MDBCardTitle>
            <MDBCardText>
              {this.props.CarForSaleCard.adDescription}
            </MDBCardText>
              <MDBListGroupItem className="d-flex">
                Inlagd : {date}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Pris : {this.props.CarForSaleCard.price} SEK</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Typ av bil : {this.props.CarForSaleCard.carCategory}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Märke : {this.props.CarForSaleCard.carBrand}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Modellår : {this.props.CarForSaleCard.carModelYear}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Drivmedel : {this.props.CarForSaleCard.carFuel}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Växellåda : {this.props.CarForSaleCard.gearbox}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Miltal : {this.props.CarForSaleCard.mileage}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Plats: {this.props.CarForSaleCard.location}</MDBListGroupItem>
              {ContactButtons}
          </MDBCardBody>
        </MDBCard>
        <br />
      </MDBCol>
    );
  }
}

export default CarForSaleCard;
