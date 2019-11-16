import React from 'react';
import carOptions from '../../assets/data/car-options';
import CarForSaleCard from './CarForSaleCard';
import API from '../../cars-api';
import {MDBBtn, MDBIcon} from 'mdbreact';
import {Form } from 'react-bootstrap';
import {MDBContainer, MBD} from 'mdbreact';
class CarForSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      shwoFilter: false,
      carFilter: '',
      query: ''
     };
     this.toggelFilter = this.toggelFilter.bind(this);
     this.handleChange = this.handleChange.bind(this);
    //  this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => {
    this.getAllCars();
    // this.onSubmit();
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

  // onSubmit =  () => {
  //   API.get(`?carCategory=${this.state.carFilter}`)
  //   .then(res => {
  //     console.log(res.data)
  //     this.setState({
  //       cars: res.data
  //     })
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

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

    console.log(this.state.query);
    console.log(this.state.carFilter)

    let carOptionList = carOptions.map((option) =>
    <option key={option.name}>{option.name}</option>);

    return (
      <div>
      <MDBBtn color="primary" onClick={this.toggelFilter}>
      <MDBIcon icon="filter" /> filtrera bilar </MDBBtn>

      {this.state.shwoFilter &&
        <MDBContainer>
        <form onSubmit={this.onSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <br />
              <p className="text">Typ av bil</p>
              <Form.Control as="select" placeholder="Välj bilmärke"
                onChange={this.handleChange}
                value={this.state.carFilter}
                name="carFilter">
                <option value="" disabled>Välj ett alternativ...</option>
                {carOptionList}
              </Form.Control>
            </Form.Group>
            <MDBBtn color="btn btn-success" type="submit" className="font-weight-bold">
              spara
            </MDBBtn>
          </form>
        </MDBContainer>
      }

      {cars.map(item =>
      <CarForSaleCard key={item._id}
        CarForSaleCard={item} >)
      </CarForSaleCard>)}
      </div>
    );
  }
}

export default CarForSale;
