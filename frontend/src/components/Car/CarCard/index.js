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
      // carImage: this.props.carCard.carImage
      carImage: [],
      carImageName: this.props.carCard.carImage
     };
     this.getCarByUserId = this.getCarByUserId.bind(this);
     this.getCarImg = this.getCarImg.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/users/${this.state.userId}/cars/${this.state.carId}`)
      .then(res => {
        // console.log(res.data);
      })
  }

  componentDidMount() {
    this.getCarByUserId();
    this.getCarImg();
  }

  getCarByUserId = () => {
    axios.get(`http://localhost:5000/users/${this.state.userId}/cars`)
      .then(res => {
        // console.log(res.data)
        this.setState({
          carImageName: res.data.cars.map(item => item.carImage)
        })
      })
      .catch(error => {
        console.log(error);
      });
    }

  getCarImg = () => {
    setTimeout(() => {
      axios.get(`http://localhost:5000/uploads/${this.state.carImageName}`)
          .then(res => {
            console.log(res);
            this.setState({
              carImage: res.config.url
            })
          });
    }, 300);
  }

  render() {
    let fullDate = this.props.carCard.updatedAt;
    let date = fullDate.substr(0, 10);
    console.log(this.state.carImageName)

    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid" src={this.state.carImage} waves />
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
