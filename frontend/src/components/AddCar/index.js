import React from "react";
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import { Link, Redirect } from "react-router-dom";

class AddCar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // handleChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // componentDidMount() {
  //   this.AddCar();
  // }

  // onSubmit(e) {
  //   e.preventDefault();
  //   this.componentDidMount()
  // }

  // createUser() {
  //   const car = {

  //   }

  //   axios.post('http://localhost:5000/cars/', car)

  // }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <div className="sign-in">
                <h3 className="my-3">
                  <strong className="font-weight-bold">Lägg in din bil annons</strong>
                </h3>
              <br />
            </div>
            <form onSubmit={this.onSubmit}>
              <label htmlFor="firstName" className="dark-grey-text">
                Title
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={this.state.firstName}
                onChange={this.handleChange}
                name="firstName"
              />
              <br />
              <label htmlFor="lastName" className="dark-grey-text">
                Beskrivning
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={this.state.lastName}
                onChange={this.handleChange}
                name="lastName"
              />
              <br />
              <label htmlFor="email" className="dark-grey-text">
                Categoeory
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
              <br />
              <label htmlFor="mobile" className="dark-grey-text">
                Märke
              </label>
              <input
                type="number"
                id="mobile"
                className="form-control"
                value={this.state.mobile}
                onChange={this.handleChange}
                name="mobile"
              />
              <br />
              <label
                htmlFor="password"
                className="dark-grey-text"
              >
                Modell
              </label>
              <input
                autoComplete="password"
                type="password"
                id="password"
                className="form-control"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
              />
              <div className="text-center mt-4">
                <MDBBtn color="btn btn-success" type="submit" className="font-weight-bold">
                  Lägg in annons
                </MDBBtn>
              </div>
              <br />
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default AddCar;
