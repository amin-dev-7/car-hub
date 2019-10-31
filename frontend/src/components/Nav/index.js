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
      <MDBNavbar color="blue" dark expand="md">
        <MDBNavbarBrand>
          <h4><strong className="white-text"
          style={{ fontFamily: 'Trajan', fontWeight: 'bold' }}
          >CARHUB</strong></h4>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <br />
          <br />
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/"><h5 className="font-weight-bold">Hem</h5></MDBNavLink>
            </MDBNavItem>
            <br />
            <MDBNavItem>
              <MDBNavLink to="/"><h5 className="font-weight-bold">CAR HUB</h5></MDBNavLink>
            </MDBNavItem>
            <br />
            <MDBNavItem>
              <MDBNavLink to="/"><h5 className="font-weight-bold">CAR HUB</h5></MDBNavLink>
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
