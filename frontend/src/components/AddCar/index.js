import React from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import carOptions from '../../assets/data/car-options.json';
import carModelYears from '../../assets/data/car-model-year.json';
import fuelOptions from '../../assets/data/fuel-options.json';
import carList from '../../assets/data/car-list.json';
import cities from '../../assets/data/cities.json';
import gearboxOptions from '../../assets/data/gearbox-options.json';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';
import { Link, Redirect } from "react-router-dom";
import {Form, InputGroup, FormControl} from 'react-bootstrap';
class AddCar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: Cookies.get('userId'),
      token: Cookies.get('access_token'),
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
      file: null,
      redirectTo: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
  }

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
       });
  };

  onChangeImg(e) {
    this.setState({
      file:e.target.files[0]
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('myImage',this.state.file);
    formData.append("adTitle", this.state.adTitle);
    formData.append("adDescription", this.state.adDescription);
    formData.append("carCategory", this.state.carCategory);
    formData.append("carBrand", this.state.carBrand);
    formData.append("carModelYear", this.state.carModelYear);
    formData.append("carFuel", this.state.carFuel);
    formData.append("gearbox", this.state.gearbox);
    formData.append("price", this.state.price);
    formData.append("location", this.state.location);
    formData.append("mileage", this.state.mileage);

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };

    axios.post( `http://localhost:5000/users/${this.state.userId}/cars`,formData,config)
      .then(res => {
        console.log(res.data)
        if (res.status === 200) {
          console.log("the ad has been added")
          this.setState({
            redirectTo: '/car-card'
          })
        }
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

    if (!this.state.token) {
      return <Redirect to="/login"/>
    }
    if (this.state.redirectTo) {
      return <Redirect to="/car-card"/>
    }else {
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
                  <div className="custom-file">
                    <input name="myImage" type="file" id="inputGroupFile01" ria-describedby="inputGroupFileAddon01"
                      onChange={this.onChangeImg}
                    />
                    <label className="custom-file-label text-left" htmlFor="inputGroupFile01">
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
                    <option value="" disabled>Välj ett alternativ...</option>
                    {carOptionList}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <p className="text-left">Märke</p>
                  <Form.Control as="select" placeholder="Välj bilmärke"
                    onChange={this.handleChange}
                    value={this.state.carBrand}
                    name="carBrand">
                    <option value="" disabled>Välj ett alternativ...</option>
                    {carBrandList}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <p className="text-left">Modellår</p>
                  <Form.Control as="select" placeholder="Välj bilmärke"
                    onChange={this.handleChange}
                    value={this.state.carModelYear}
                    name="carModelYear">
                    <option value="" disabled>Välj ett alternativ...</option>
                    {carModelYearList}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <p className="text-left">Drivmedel</p>
                  <Form.Control as="select" placeholder="Välj bilmärke"
                    onChange={this.handleChange}
                    value={this.state.carFuel}
                    name="carFuel">
                    <option value="" disabled>Välj ett alternativ...</option>
                    {fuelOptionList}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <p className="text-left">Växellåda</p>
                  <Form.Control as="select" placeholder="Välj bilmärke"
                    onChange={this.handleChange}
                    value={this.state.gearbox}
                    name="gearbox">
                    <option value="" disabled>Välj ett alternativ...</option>
                    {gearboxOptionList}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <p className="text-left">Plats</p>
                  <Form.Control as="select" placeholder="Välj bilmärke"
                    onChange={this.handleChange}
                    value={this.state.location}
                    name="location">
                    <option value="" disabled>Välj ett alternativ...</option>
                    {citiesList}
                  </Form.Control>
                </Form.Group>
                <p className="text-left">Anonns titel</p>
                <input type="text" id="titel" className="form-control" name="adTitle"
                value={this.state.adTitle} onChange={this.handleChange} />
                <br />
                <p className="text-left">Miltal </p>
                  <InputGroup className="mb-3">
                    <FormControl
                    value={this.state.mileage}
                    onChange={this.handleChange}
                    name="mileage"
                    type="number"
                    />
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
}

export default AddCar;
