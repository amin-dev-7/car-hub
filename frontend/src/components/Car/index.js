import React from 'react';
import CarCard from './CarCard'
import Cookies from 'js-cookie';
import {MDBAlert} from 'mdbreact'
import USER_API from '../../assets/api/users-api';
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

  componentDidMount = () => {
    USER_API.get(`${this.state.userId}/cars`)
      .then(res => {
        this.setState({
          cars: res.data.cars
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let cars = this.state.cars;
    const carCards = cars.map(item => <CarCard  key={item._id} carCard={item}/>);

    if(cars.length <= 0) {
      return (
        <MDBAlert color="danger">
          Det finns inga annonser att hantera
        </MDBAlert>
        );
    } return (
      <div>
        {carCards}
      </div>
    );
  }
}

export default Car;
