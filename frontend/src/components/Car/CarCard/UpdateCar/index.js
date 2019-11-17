import React from "react";
import CAR_API from '../../../../cars-api';
import axios from 'axios';
import Cookies from 'js-cookie';
import carOptions from '../../../../assets/data/car-options';
import carModelYears from '../../../../assets/data/car-model-year.json';
import fuelOptions from '../../../../assets/data/fuel-options.json';
import carList from '../../../../assets/data/car-list.json';
import cities from '../../../../assets/data/cities.json';
import gearboxOptions from '../../../../assets/data/gearbox-options.json';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';
import {Form, InputGroup, FormControl} from 'react-bootstrap';
import {Redirect} from'react-router-dom';
class UpdateCar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      carId: this.props.carId,
      userId: Cookies.get('userId'),
      adTitle: '',
      adDescription: '',
      carCategory: '',
      carBrand: '',
      carModelYear: '',
      carFuel: '',
      gearbox: '',
      price: '',
      mileage: '',
      location: '',
      redirectTo: false
    };
    this.handelUpdate = this.handelUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount = () => {
    this.getCarByCarId();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
      });
  };

  onClick = () => {
    setTimeout(() => {
    }, 500);
  }

  handelUpdate = e => {

    const updatedCar = {
      adTitle: this.state.adTitle,
      adDescription: this.state.adDescription,
      carCategory: this.state.carCategory,
      carBrand: this.state.carBrand,
      carModelYear: this.state.carModelYear,
      carFuel: this.state.carFuel,
      gearbox: this.state.gearbox,
      price: this.state.price,
      mileage: this.state.mileage,
      location: this.state.location
    }

    e.preventDefault();
    CAR_API.put(`${this.state.carId}`, updatedCar)
      .then(res => {
        console.log(res.data)
        if (res.status === 200) {
          this.setState({
            redirectTo: '/car-card'
          });
        }
      }).catch(error => {
        console.log(error.response);
      });
  }

  handleDelete = (e) => {
    e.preventDefault();
    CAR_API.delete(`${this.state.carId}}`)
      .then(res => {
        console.log(res.data);
        if(res.status === 200) {
          this.setState({
            redirectTo: '/car-card'
          })
        }
      });
  }

  getCarByCarId() {
    axios.get(`http://localhost:5000/cars/${this.state.carId}`)
      .then(res => {
        console.log(res.data)
        let carData = res.data;
        this.setState({
          adTitle: carData.adTitle,
          adDescription: carData.adDescription,
          carCategory: carData.carCategory,
          carBrand: carData.carBrand,
          carModelYear: carData.carModelYear,
          carFuel: carData.carFuel,
          gearbox: carData.gearbox,
          price: carData.price,
          mileage: carData.mileage,
          location: carData.location,
        })
      }).catch(error => {
        console.log(error.response);
      });
  }

  render() {

    // SELECT OPTIONS
    let carOptionList = carOptions.map((option) =>
      <option key={option.name}>{option.name}</option>
      );
    let fuelOptionList = fuelOptions.map((option) =>
      <option key={option.name}>{option.name}</option>
      );
    let gearboxOptionList = gearboxOptions.map((option) =>
      <option key={option.name}>{option.name}</option>
      );
    let carModelYearList = carModelYears.map((option) =>
      <option key={option.name}>{option.name}</option>
      );
    let carBrandList = carList.map((option) =>
      <option key={option.name}>{option.name}</option>
      );
    let citiesList = cities.map((option) =>
      <option key={option.name}>{option.name}</option>
      );

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }else {
      return (
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <div className="sign-in">
                  <h3 className="my-3">
                    <strong className="font-weight-bold"> Ändra bilannonsen</strong>
                  </h3>
                <br />
              </div>
              <Form onSubmit={this.handelUpdate}>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <p className="text-left">Typ av bil</p>
                  <Form.Control as="select" placeholder="Välj bilmärke"
                    onChange={this.handleChange}
                    value={this.state.carCategory}
                    name="carCategory">
                    <option>Välj ett alternativ...</option>
                    {carOptionList}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <p className="text-left">Märke</p>
                  <Form.Control as="select" placeholder="Välj bilmärke"
                    onChange={this.handleChange}
                    value={this.state.carBrand}
                    name="carBrand">
                    <option disabled>Välj ett alternativ...</option>
                    {carBrandList}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <p className="text-left">Modellår</p>
                  <Form.Control as="select" placeholder="Välj bilmärke"
                    onChange={this.handleChange}
                    value={this.state.carModelYear}
                    name="carModelYear">
                    <option disabled>Välj ett alternativ...</option>
                    {carModelYearList}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <p className="text-left">Drivmedel</p>
                  <Form.Control as="select" placeholder="Välj bilmärke"
                    onChange={this.handleChange}
                    value={this.state.carFuel}
                    name="carFuel">
                    <option disabled>Välj ett alternativ...</option>
                    {fuelOptionList}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <p className="text-left">Växellåda</p>
                  <Form.Control as="select" placeholder="Välj bilmärke"
                    onChange={this.handleChange}
                    value={this.state.gearbox}
                    name="gearbox">
                    <option disabled>Välj ett alternativ...</option>
                    {gearboxOptionList}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <p className="text-left">Plats</p>
                  <Form.Control as="select" placeholder="Välj bilmärke"
                    onChange={this.handleChange}
                    value={this.state.location}
                    name="location">
                    <option disabled>Välj ett alternativ...</option>
                    {citiesList}
                  </Form.Control>
                </Form.Group>
                <p className="text-left">Anonns titel</p>
                <input type="text" id="titel" className="form-control" name="adTitle"
                value={this.state.adTitle} onChange={this.handleChange}>
                </input>
                <br />
                <p className="text-left">Miltal </p>
                  <InputGroup className="mb-3">
                    <FormControl
                    value={this.state.mileage}
                    onChange={this.handleChange}
                    name="mileage"
                    type="number"
                    >
                      {/* {car.mileage} */}
                    </FormControl>
                    <InputGroup.Append>
                      <InputGroup.Text>Mil</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                <p className="text-left">Pris </p>
                  <InputGroup className="mb-3">
                    <FormControl
                    value={this.state.price}
                    onChange={this.handleChange}
                    name="price"
                    type="number"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text>SEK</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                <br />
                <MDBInput type="textarea" label="Beskrivning" rows="3" name="adDescription"
                  value={this.state.adDescription} onChange={this.handleChange} />
                <br />
                <div className="text-center mt-4">
                  <MDBBtn
                    color="btn btn-success" type="submit" className="font-weight-bold">
                      Ändra annonsen
                  </MDBBtn>
                </div>
                </Form>
                <Form onSubmit={this.handleDelete}>
                  <MDBBtn
                    color="btn btn-success" type="submit" className="font-weight-bold">
                      Delete annons
                  </MDBBtn>
                </Form>
              <br />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    }
  }
}

export default UpdateCar;
