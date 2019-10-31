import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol
} from 'mdbreact';

const AdCard = () => {
  return (
    <MDBCol>
      <br />
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn color="btn btn-success" className="font-weight-bold" href="#">Lägg in annons</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <br />
    </MDBCol>
  )
}

export default AdCard;
