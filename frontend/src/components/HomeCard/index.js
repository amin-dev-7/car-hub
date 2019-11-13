import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol
} from 'mdbreact';
import heroImg from '../../assets/images/hero-img.png'
import { Link } from 'react-router-dom';

const HomeCard = () => {
  return (
    <div>
      <MDBCardImage className="img-fluid" src={heroImg} waves />
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardBody>
            <MDBCardTitle>HITTA DIN BIL</MDBCardTitle>
            <p className="text-body">
              På CarHub hittar du din framtida bil snabbt och enkelt
            </p>
            <Link to="/car-for-sale">
            <MDBBtn color="btn btn-success" className="font-weight-bold">Hitta din bil</MDBBtn>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  )
}

export default HomeCard;
