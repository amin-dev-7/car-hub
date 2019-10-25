import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const LoginFrom = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Logga in
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="E-post" group type="text" validate />
              <MDBInput
                label="Lösenord"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color="danger"
                  type="button"
                  className="btn-block z-depth-2"
                >
                  Logga in
                </MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Ny kund?
                <Link to="/signup" className="dark-grey-text font-weight-bold ml-1">
                  Skapa ett konto
                </Link>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginFrom;
