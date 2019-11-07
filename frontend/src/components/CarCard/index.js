import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBCardText, MDBCol }
from 'mdbreact';

class CarCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: Cookies.get('userId'),
      loggedIn: false,
      token: Cookies.get('access_token'),
     };
     this.getCarByUserId = this.getCarByUserId.bind(this);
  }

  componentDidMount() {
    this.getCarByUserId();
  }

  getCarByUserId() {
    axios.get(`http://localhost:5000/users/${this.state.userId}/cars`)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    );
  }
}

export default CarCard;
