import React from "react";
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCardHeader,} from 'mdbreact';
import { Link } from "react-router-dom";

class LoginFrom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

     };

  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <MDBCardHeader className = "form-header indigo rounded" >
                <h3 className="my-3">
                  <MDBIcon icon="lock" className="text-white" />
                  <strong className="font-weight-bold text-white"> Logga in</strong>
                </h3>
              </MDBCardHeader>
              <br />
              <br />
              <label htmlFor="defaultFormLoginEmailEx" className="dark-grey-text">
                E-post
              </label>
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="dark-grey-text">
                Lösenord
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
                autoComplete="password"
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit" className="font-weight-bold">logga in</MDBBtn>
              </div>
              <br />
              <p className="font-small grey-text d-flex justify-content-center">
                Ny kund?
                <Link to="/signup" className="dark-grey-text font-weight-bold ml-1">
                Skapa ett konto
                </Link>
              </p>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LoginFrom;
