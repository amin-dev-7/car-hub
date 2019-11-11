import React from 'react';
import axios from 'axios';
import Car from '../Car'
import Cookies from 'js-cookie';
import {MDBAlert} from 'mdbreact'
class CarCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: Cookies.get('userId'),
      loggedIn: false,
      token: Cookies.get('access_token'),
      cars: [],
     };
     this.getCarByUserId = this.getCarByUserId.bind(this);
  }

  componentDidMount() {
    this.getCarByUserId();
    this.noAds ();
  }

  noAds () {
    return (
      <MDBAlert color="danger">
        Det finns inga annonser att hantera
      </MDBAlert>
    )
  }

  getCarByUserId() {
    axios.get(`http://localhost:5000/users/${this.state.userId}/cars`)
      .then(res => {
        console.log(res.data)
        this.setState({
          cars: res.data.cars
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let cars = this.state.cars;
    console.log(cars)
    const carComponent = cars.map(item => <Car key={item._id} car={item}/>)
    return (
      <div>
      {cars &&
        <div>
        {carComponent}
        </div>
      }
      {this.state.noAds}
      </div>
    );
  }
}

export default CarCard;
