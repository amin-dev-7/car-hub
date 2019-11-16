import React from 'react';
import carOptions from '../../assets/data/car-options';
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
      querCars: [],
      isQuery: false,
      shwoFilter: false,
      carFilter: '',
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
    this.getQueryCars();
  }

  getQueryCars =  () => {
    API.get(`?carCategory=${this.state.carFilter}`)
    .then(res => {
      console.log(res.data)
        this.setState({
          querCars: res.data,
          isQuery: true
        });
    })
    .catch(error => {
      console.log(error);
    });
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
    let queryCars = this.state.querCars;
    let card;

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

    const carOptionList = carOptions.map((option) =>
    <option key={option.name}>{option.name}</option>);

    return (
      <div>
        <MDBBtn color="primary" onClick={this.toggelFilter}>
        <MDBIcon icon="filter" /> filtrera bilar </MDBBtn>
        {this.state.shwoFilter &&
          <MDBContainer>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <br />
                <Form.Control as="select" placeholder="Välj bilmärke"
                  onChange={this.handleChange}
                  value={this.state.carFilter}
                  name="carFilter">
                  <option value="" disabled>Välj ett alternativ...</option>
                  {carOptionList}
                </Form.Control>
              </Form.Group>
              <MDBBtn onClick={this.handleClick} color="btn btn-success" type="submit" className="font-weight-bold">
                spara
              </MDBBtn>
          </MDBContainer>
        }
        {card}
      </div>
    );
  }
}

export default CarForSale;
