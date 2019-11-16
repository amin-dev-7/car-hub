import React from 'react';
import CarForSaleCard from './CarForSaleCard';
import API from '../../cars-api';
import Fiter from './Filter'
import {MDBBtn, MDBIcon} from 'mdbreact';
class CarForSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      shwoFilter: false
     };
     this.state.toggelFilter = this.toggelFilter.bind(this);
  }

  toggelFilter = () => {
    this.setState({
      shwoFilter: !this.state.shwoFilter
    })
  }

  componentDidMount = () => {
    this.getAllCars();
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

    return (
      <div>
      <MDBBtn color="primary" onClick={this.toggelFilter}>
      <MDBIcon icon="filter" /></MDBBtn>
      {this.state.shwoFilter && <Fiter/>}
      {cars.map(item =>
      <CarForSaleCard key={item._id}
        CarForSaleCard={item} >)
      </CarForSaleCard>)}
      </div>
    );
  }
}

export default CarForSale;
