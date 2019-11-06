import React from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import carOptions from '../../assets/data/car-options.json'
import carModelYears from '../../assets/data/car-model-year.json'
import fuelOptions from '../../assets/data/fuel-options.json'
import carList from '../../assets/data/car-list.json'
import cities from '../../assets/data/cities.json'
import gearboxOptions from '../../assets/data/gearbox-options.json'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInputGroup, MDBInput} from 'mdbreact';
import { Link, Redirect } from "react-router-dom";
import 'react-dropdown/style.css'
import Form from 'react-bootstrap/Form'
class AddCar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: Cookies.get('userId'),
      loggedIn: false,
      token: Cookies.get('access_token'),
      adTitle: '',
      adDescription: '',
      carCategory: '',
      carBrand: '',
      carModelYear: '',
      carFuel: '',
      gearbox: '',
      price: '',
      location: '',
      carImage: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
    this.addCar = this.addCar.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }
  componentDidMount() {
    this.addCar();
  }

  onSubmit(e) {
    e.preventDefault();
    this.componentDidMount()
  }

  addCar() {
    const car = {
      adTitle: this.state.adTitle,
      adDescription: this.state.adDescription,
      carCategory: this.state.carCategory,
      carBrand: this.state.carBrand,
      carModelYear: this.state.carModelYear,
      carFuel: this.state.carFuel,
      gearbox: this.state.gearbox,
      price: this.state.price,
      location: this.state.location,
      carImage: this.state.carImage,
    }

    axios.post(`http://localhost:5000/users/${this.state.userId}/cars`, car)
      .then(res => {
        console.log(res.data)
        if (res.status === 200) {
          console.log("the ad has been added")
        }
      }).catch(error => {
        console.log(error.response);
      });
  }

  render() {
    console.log(this.state)
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

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <div className="sign-in">
                <h3 className="my-3">
                  <strong className="font-weight-bold"> Lägg in din bilannons</strong>
                </h3>
              <br />
            </div>
            <Form encType="multipart/form-data" onSubmit={this.onSubmit}>
              <p className="text-left">Bilder </p>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">Ladda upp </span>
                </div>
                <div className="custom-file">
                  <input name="carImage" type="file" id="inputGroupFile01" ria-describedby="inputGroupFileAddon01"/>
                  <label className="custom-file-label" htmlFor="inputGroupFile01">
                    Välj bild
                  </label>
                </div>
              </div>
              <br />
              <br />
              <Form.Group controlId="exampleForm.ControlSelect2">
                <p className="text-left">Typ av bil</p>
                <Form.Control as="select" placeholder="Välj bilmärke"
                  onChange={this.handleChange}
                  value={this.state.carCategory}
                  name="carCategory">
                {carOptionList}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <p className="text-left">Märke</p>
                <Form.Control as="select" placeholder="Välj bilmärke"
                  // value={carModelYearLsit.value}
                  onChange={this.handleChange}
                  value={this.state.carBrand}
                  name="carBrand">
                  {carBrandList}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <p className="text-left">Modellår</p>
                <Form.Control as="select" placeholder="Välj bilmärke"
                  onChange={this.handleChange}
                  value={this.state.carModelYear}
                  name="carModelYear">
                  {carModelYearList}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <p className="text-left">Drivmedel</p>
                <Form.Control as="select" placeholder="Välj bilmärke"
                  onChange={this.handleChange}
                  value={this.state.carFuel}
                  name="carFuel">
                  {fuelOptionList}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <p className="text-left">Växellåda</p>
                <Form.Control as="select" placeholder="Välj bilmärke"
                  onChange={this.handleChange}
                  value={this.state.gearbox}
                  name="gearbox">
                  {gearboxOptionList}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <p className="text-left">Plats</p>
                <Form.Control as="select" placeholder="Välj bilmärke"
                  onChange={this.handleChange}
                  value={this.state.location}
                  name="location">
                  {citiesList}
                </Form.Control>
              </Form.Group>
              <p className="text-left">Anonns titel</p>
              <input type="text" id="titel" className="form-control" name="adTitle"
               value={this.state.adTitle} onChange={this.handleChange} />
              <br />
              <p className="text-left">Pris </p>
                <MDBInput type="number"  append="SEK" name="price"
                  onChange={this.handleChange} value={this.state.price}/>
              <br />
              <MDBInput type="textarea" label="Beskrivning" rows="3" name="adDescription"
                 value={this.state.adDescription} onChange={this.handleChange} />
              <br />
              <div className="text-center mt-4">
                <MDBBtn color="btn btn-success" type="submit" className="font-weight-bold">
                  Lägg in annons
                </MDBBtn>
              </div>
            </Form>
            <br />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default AddCar;
