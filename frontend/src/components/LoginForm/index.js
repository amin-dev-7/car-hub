import React from "react";
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCardHeader,} from 'mdbreact';
import { Link } from "react-router-dom";

class LoginFrom extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
    email: '',
    password: ''
    };

  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  };

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    })
  };

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:5000/users/auth', user)
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error.response);
      });

    this.setState({
      email: '',
      password: '',
    });

  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.onSubmit}>
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
                value={this.state.email}
                onChange={this.onChangeEmail}
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
                value={this.state.password}
                onChange={this.onChangePassword}
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
