import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol
} from 'mdbreact';
import { Link } from 'react-router-dom';

const HomeAdCard = () => {
  return (
    <MDBCol>
      <br />
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="" waves />
        <MDBCardBody>
          <MDBCardTitle>LÄGG IN DIN ANNONS</MDBCardTitle>
          <p>
            Lägg in din bilanons hos oss och få din bil sålt smidigt
          </p>
          <Link to="/add-car">
          <MDBBtn color="btn btn-success" className="font-weight-bold">Lägg in annons</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
      <br />
    </MDBCol>
  )
}

export default HomeAdCard;
