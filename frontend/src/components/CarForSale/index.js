import React from 'react';
import axios from 'axios';
import CarForSaleCard from './CarForSaleCard';
class CarForSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
     };
  }

  componentDidMount() {
    this.getAllCars();
  }

  getAllCars() {
    axios.get('http://localhost:5000/cars/')
      .then(res => {
        this.setState({
          cars: res.data,
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
      {cars.map(item =>
      <CarForSaleCard key={item._id}
        CarForSaleCard={item} >)
      </CarForSaleCard>)}
      </div>
    );
  }
}

export default CarForSale;
