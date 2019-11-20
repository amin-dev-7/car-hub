import React from 'react';
import carOptions from '../../assets/data/car-options';
import fuelOptions from '../../assets/data/fuel-options.json';
import carList from '../../assets/data/car-list.json';
import CarForSaleCard from './CarForSaleCard';
import CAR_API from '../../assets/api/cars-api';
import {MDBBtn, MDBIcon} from 'mdbreact';
import {Form } from 'react-bootstrap';
import {MDBContainer} from 'mdbreact';
class CarForSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCars: [],
      carsByBrand: [],
      carsByCategory: [],
      carsByFeul: [],
      shwoFilter: false,
      carCatFilter: '',
      carFuelFilter: '',
      carBrandFilter: '',
      carOptions: carOptions,
      fuelOptions: fuelOptions,
      carList: carList
     };
     this.toggelFilter = this.toggelFilter.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount = () => {
    this.getAllCars();
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
    this.toggelFilter();
    this.getCarsByCategory();
    this.getCarsByFuel();
    this.getCarsByBrand();
  }

  getAllCars = () => {
    CAR_API.get()
    .then(res => {
      this.setState({
        allCars: res.data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  getCarsByCategory =  () => {
    CAR_API.get(`?carCategory=${this.state.carCatFilter}`)
    .then(res => {
        this.setState({
          carsByCategory: res.data
        });
    })
  }

  getCarsByFuel =  () => {
    CAR_API.get(`?carFuel=${this.state.carFuelFilter}`)
    .then(res => {
        this.setState({
          carsByFeul: res.data
        });
    })
  }

  getCarsByBrand =  () => {
    CAR_API.get(`?carBrand=${this.state.carBrandFilter}`)
    .then(res => {
        this.setState({
          carsByBrand: res.data
        });
    })
  }

  listGenerator = (optionsArray) => {
    return (
      optionsArray.map((option) =>
      <option key={option.name}>{option.name}</option>)
    )
  }

  render() {
    let allCars = this.state.allCars;
    let carsByBrand = this.state.carsByBrand;
    let carsByCategory = this.state.carsByCategory;
    let carsByFeul = this.state.carsByFeul;
    let card;

    const carFilter = (filterArray) => {
      if(filterArray.length > 0) {
        card = filterArray.map(item =>
          <CarForSaleCard key={item._id}
            CarForSaleCard={item} >)
          </CarForSaleCard>
        );
      }
    };

    if (carsByFeul.length === 0 && carsByCategory.length === 0 && carsByBrand.length === 0){
      carFilter(allCars);
    };
    if (carsByBrand.length > 0) {
      carFilter(carsByBrand);
    };
    if (carsByCategory.length > 0) {
      carFilter(carsByCategory);
    };
    if (carsByFeul.length > 0) {
      carFilter(carsByFeul);
    };

    return (
      <div>
        <MDBBtn color="" onClick={this.toggelFilter} className="font-weight-bold white-text button-color">
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
                {this.listGenerator(this.state.carOptions)}
              </Form.Control>
              <br />
              <p className="text-left">Drivmedel</p>
              <Form.Control as="select"
                onChange={this.handleChange}
                value={this.state.carFuelFilter}
                name="carFuelFilter">
                <option value="" disabled>Välj ett alternativ...</option>
                {this.listGenerator(this.state.fuelOptions)}
              </Form.Control>
              <br />
              <p className="text-left">Märke</p>
              <Form.Control as="select"
                onChange={this.handleChange}
                value={this.state.carBrandFilter}
                name="carBrandFilter">
                <option value="" disabled>Välj ett alternativ...</option>
                {this.listGenerator(this.state.carList)}
              </Form.Control>
              <br />
              <MDBBtn onClick={this.handleClick} color="" type="submit" className="font-weight-bold white-text button-color">
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
