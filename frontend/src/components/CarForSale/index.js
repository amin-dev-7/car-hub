import React from 'react';
import carOptions from '../../assets/data/car-options';
import fuelOptions from '../../assets/data/fuel-options.json';
import carList from '../../assets/data/car-list.json';
import CarForSaleCard from './CarForSaleCard';
import API from '../../cars-api';
import {MDBBtn, MDBIcon} from 'mdbreact';
import {Form } from 'react-bootstrap';
import {MDBContainer} from 'mdbreact';
class CarForSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      queryCars: [],
      isQuery: false,
      shwoFilter: false,
      carCatFilter: '',
      carFuelFilter: '',
      carBrandFilter: '',
      query: '',
     };
     this.toggelFilter = this.toggelFilter.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount = () => {
    this.getAllCars();
    this.handleClick()
  }

  handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
    });
  };

  toggelFilter = () => {
    this.setState({
      shwoFilter: !this.state.shwoFilter
    })
  }

  handleClick = () => {
    this.getCarsByCategory();
    this.getCarsByFuel();
    this.getCarsByBrand();
  }

  getCarsByCategory =  () => {
    API.get(`?carCategory=${this.state.carCatFilter}`)
    .then(res => {
        this.setState({
          queryCars: res.data,
          isQuery: true
        });
    })
  }

  getCarsByFuel =  () => {
    API.get(`?carFuel=${this.state.carFuelFilter}`)
    .then(res => {
        this.setState({
          queryCars: res.data,
          isQuery: true
        });
    })
  }

  getCarsByBrand =  () => {
    API.get(`?carBrand=${this.state.carBrandFilter}`)
    .then(res => {
        this.setState({
          queryCars: res.data,
          isQuery: true
        });
    })
  }

  getAllCars = () => {
    API.get()
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    let cars = this.state.cars;
    let queryCars = this.state.queryCars;
    let card;

    console.log(queryCars)
    console.log(this.state.carCatFilter)

    if(queryCars.length > 0) {
      card = queryCars.map(item =>
        <CarForSaleCard key={item._id}
          CarForSaleCard={item} >)
        </CarForSaleCard>)
    } else {
      card = cars.map(item =>
        <CarForSaleCard key={item._id}
          CarForSaleCard={item} >)
        </CarForSaleCard>)
    }

    // SELECT OPTIONS
    const carOptionList = carOptions.map((option) =>
    <option key={option.name}>{option.name}</option>);
    const fuelOptionList = fuelOptions.map((option) =>
    <option key={option.name}>{option.name}</option>);
    const carBrandList = carList.map((option) =>
    <option key={option.name}>{option.name}</option>);

    return (
      <div>
        <MDBBtn color="primary" onClick={this.toggelFilter}>
        <MDBIcon icon="filter" /> filtrera bilar </MDBBtn>
        {this.state.shwoFilter &&
          <MDBContainer>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <br />
              <p className="text-left">Typ av bil</p>
              <Form.Control as="select"
                onChange={this.handleChange}
                value={this.state.carCatFilter}
                name="carCatFilter">
                <option value="" disabled>Välj ett alternativ...</option>
                {carOptionList}
              </Form.Control>
              <br />
              <p className="text-left">Drivmedel</p>
              <Form.Control as="select"
                onChange={this.handleChange}
                value={this.state.carFuelFilter}
                name="carFuelFilter">
                <option value="" disabled>Välj ett alternativ...</option>
                {fuelOptionList}
              </Form.Control>
              <p className="text-left">Märke</p>
              <Form.Control as="select"
                onChange={this.handleChange}
                value={this.state.carBrandFilter}
                name="carBrandFilter">
                <option value="" disabled>Välj ett alternativ...</option>
                {carBrandList}
              </Form.Control>
              <MDBBtn onClick={this.handleClick} color="btn btn-success" type="submit" className="font-weight-bold">
                spara
              </MDBBtn>
            </Form.Group>
            <br />
          </MDBContainer>
        }
        {card}
      </div>
    );
  }
}

export default CarForSale;
