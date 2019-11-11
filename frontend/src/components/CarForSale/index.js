import React from 'react';
import axios from 'axios';
import CarForSaleCard from './CarForSaleCard'

class CarForSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

     };

  }

  render() {
    return (
      <div>
        <CarForSaleCard />
      </div>
    );
  }
}

export default CarForSale;
