import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Nav extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">CAR HUB</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <br />
          <br />

          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/"><h4 className="font-weight-bold">Hem</h4></MDBNavLink>
            </MDBNavItem>
            <br />
            <MDBNavItem>
              <MDBNavLink to="/"><h4 className="font-weight-bold">CAR HUB</h4></MDBNavLink>
            </MDBNavItem>
            <br />
            <MDBNavItem>
              <MDBNavLink to="/"><h4 className="font-weight-bold">CAR HUB</h4></MDBNavLink>
            </MDBNavItem>
            <br />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <br />
    </Router>
    );
  }
}

export default Nav;
