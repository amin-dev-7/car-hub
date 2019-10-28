import React from "react";
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Link } from "react-router-dom";
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: ''
    }
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    })
  };

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    })
  };

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  };

  onChangeMobile(e) {
    this.setState({
      mobile: e.target.value,
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      mobile: this.state.mobile,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://localhost:5000/users/register', user)
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error.response);
      });

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
    })
  }

  render() {
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={this.onSubmit}>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              First name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Last name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              email
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              mobile
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              value={this.state.mobile}
              onChange={this.onChangeMobile}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label>
            <input
              autoComplete=""
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
};

export default SignUpForm;
