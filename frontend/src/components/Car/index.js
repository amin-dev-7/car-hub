import React from 'react';
import CarCard from './CarCard'
import Cookies from 'js-cookie';
import {MDBAlert} from 'mdbreact'
import API from './../../users-api'
class Car extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: Cookies.get('userId'),
      loggedIn: false,
      token: Cookies.get('access_token'),
      cars: []
     };
  }

  noAds = () => {
    return(
      <MDBAlert color="danger">
      Det finns inga annonser att hantera
      </MDBAlert>
    )
  }

  componentDidMount = () => {
    API.get(`${this.state.userId}/cars`)
      .then(res => {
        this.setState({
          cars: res.data.cars
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.noAds();
  };

  render() {

    let cars = this.state.cars;
    const carCards = cars.map(item => <CarCard  key={item._id} carCard={item}/>);
    return (
      <div>
        {carCards}
      </div>
    );
  }
}

export default Car;
