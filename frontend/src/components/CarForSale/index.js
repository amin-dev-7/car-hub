import React from 'react';
import CarForSaleCard from './CarForSaleCard';
import API from '../../cars-api';
class CarForSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
     };
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
      {cars.map(item =>
      <CarForSaleCard key={item._id}
        CarForSaleCard={item} >)
      </CarForSaleCard>)}
      </div>
    );
  }
}

export default CarForSale;
