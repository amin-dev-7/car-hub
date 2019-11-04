import React from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBInputGroup} from 'mdbreact';
import { Link, Redirect } from "react-router-dom";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './AddCar.css'
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
      carModel: '',
      carModelYear: '',
      carFuel: '',
      gearbox: '',
      price: '',
      location: '',
      carImage: '',

      carOptions :[
        'Sedan', 'SUV', 'Småbil', 'Kombi', 'Halvkombi', 'Coupé'
      ],
      carYear :[
          '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007',
          '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015','2016',
          '2017', '2018', '2019'],
      carOptions : [
        'Sedan', 'SUV', 'Småbil', 'Kombi', 'Halvkombi', 'Coupé'
      ],
      fuelOptions : [
        'El', 'Bensin', 'Diesel', 'Hybrid'
      ],
      gearboxOptions : [
        'Automat', 'Manuell'
      ],
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
    this.addCar = this.addCar.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

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
      carModel: this.state.carModel,
      carModelYear: this.state.carModelYear,
      carFuel: this.state.carFuel,
      gearbox: this.state.gearbox,
      price: this.state.price,
      location: this.state.location,
      carImage: this.state.carImage,
    }
    axios.post(`http://localhost:5000/users/${this.state.userId}/cars`)
      .then(res => {
        if (res.status === 200) {
          console.log("the ad has been added")
        }
      }).catch(error => {
        console.log(error.response);
      });
  }
  render() {
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
            <form onSubmit={this.onSubmit}>
              <p className="text-left">Bilder </p>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">Ladda upp </span>
                </div>
                <div className="custom-file">
                  <input type="file" id="inputGroupFile01" ria-describedby="inputGroupFileAddon01"/>
                  <label className="custom-file-label" htmlFor="inputGroupFile01">
                    Välj bild
                  </label>
                </div>
              </div>
              <br />
              <br />
              <p className="text-left">Typ av bil</p>
              <Dropdown options={this.state.carOptions} onChange={this._onSelect}
              onChange={this.handleChange} value="Välj typ av bil"
                placeholder="Select an option" name=""
              />
              <br />
              <p className="text-left">Märke</p>
              <Dropdown options={this.state.carOptions} onChange={this._onSelect} value="Välj bilmärke"
                onChange={this.handleChange} placeholder="Select an option" name="brand"
              />
              <br />
              <p className="text-left">Modell</p>
              <Dropdown options={this.state.carOptions} onChange={this._onSelect}
                 onChange={this.handleChange} value="Välj bilmodell"
                placeholder="Select an option" name="model"
              />
              <br />
              <p className="text-left">Modellår</p>
              <Dropdown options={this.state.carYear} onChange={this._onSelect} value="Välj bil modellår"
                onChange={this.handleChange} placeholder="Select an option" name="year"
              />
              <br />
              <p className="text-left">Drivmedel</p>
              <Dropdown options={this.state.fuelOptions} onChange={this._onSelect} value="Välj drivmedel"
                onChange={this.handleChange} placeholder="Select an option" name="fuel"
              />
              <br />
              <p className="text-left">Växellåda </p>
              <Dropdown options={this.state.gearboxOptions} onChange={this._onSelect} value="Välj typ av växellåda"
                onChange={this.handleChange} placeholder="Select an option" name="gearbox"
              />
              <br />
              <p className="text-left">Anonns titel</p>
              <input type="text" id="titel" className="form-control" name="titel" value={this.state.adTitle}
                onChange={this.handleChange} />
              <br />
              <p className="text-left">Pris </p>
                <MDBInputGroup containerClassName="mb-3" append="SEK" name="price"
                 value={this.state.price} onChange={this.handleChange}/>
              <br />
              <MDBInput type="textarea" label="Beskrivning" rows="3" name="desc"
                 value={this.state.adDescription} onChange={this.handleChange}/>
              <br />
              <div className="text-center mt-4">
                <MDBBtn color="btn btn-success" type="submit" className="font-weight-bold">
                  Lägg in annons
                </MDBBtn>
              </div>
            </form>
            <br />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default AddCar;
