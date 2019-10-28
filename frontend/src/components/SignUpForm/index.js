import React from "react";
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCardHeader,} from 'mdbreact';
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
          <div className="sign-in">
            <MDBCardHeader className = "form-header indigo rounded" >
              <h3 className="my-3">
                <MDBIcon icon="user-alt" className="text-white"/>
                <strong className="font-weight-bold text-white"> Skapa konto</strong>
              </h3>
            </MDBCardHeader>
            <br / >
          </div>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="defaultFormRegisterNameEx1" className="dark-grey-text">
              Förnamn
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx1"
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx2" className="dark-grey-text">
              Efternamn
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx2"
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx3" className="dark-grey-text">
              E-post
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx3"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx4" className="dark-grey-text">
              Mobile nummer
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx4"
              className="form-control"
              value={this.state.mobile}
              onChange={this.onChangeMobile}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx5"
              className="dark-grey-text"
            >
              Lösenord
            </label>
            <input
              autoComplete="password"
              type="password"
              id="defaultFormRegisterPasswordEx5"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit" className="font-weight-bold">
                Skapa konto
              </MDBBtn>
            </div>
            <br />
            <p className="font-small grey-text d-flex justify-content-center">
              Är du redan kund?
              <Link to="/login" className="dark-grey-text font-weight-bold ml-1">
                Logga in
              </Link>
            </p>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
};

export default SignUpForm;
