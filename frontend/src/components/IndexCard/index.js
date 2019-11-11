import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol
} from 'mdbreact';
import heroImg from '../../assets/images/hero-img.png'

const IndexCard = () => {
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
            <MDBBtn color="btn btn-success" className="font-weight-bold" href="#">Hitta din bil</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  )
}

export default IndexCard;
