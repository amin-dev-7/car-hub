import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCol} from 'mdbreact';
import { Link } from 'react-router-dom';
import './HeroCards.css'

const HomeCard = (props) => {
  return (
    <div>
      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>{props.title}</MDBCardTitle>
            <p className="text-body"> {props.text} </p>
            <Link to={props.link}>
              <MDBBtn className="font-weight-bold button-color">{props.btn}</MDBBtn>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  )
}

export default HomeCard;
