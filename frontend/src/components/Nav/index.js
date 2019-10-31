import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import { Link } from "react-router-dom";

class Nav extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="blue" dark expand="md">
        <MDBNavbarBrand>
          <Link to="/"><h4><strong className="white-text"
          style={{ fontFamily: 'Trajan', fontWeight: 'bold' }}
          >CARHUB</strong></h4></Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <br />
          <MDBNavbarNav left>
            <MDBNavItem>
              <Link to="/"><h5 className="font-weight-bold white-text">Hem</h5></Link>
            </MDBNavItem>
            <br />
            <MDBNavItem>
              <Link to="/"><h5 className="font-weight-bold white-text">Hem</h5></Link>
            </MDBNavItem>
            <br />
            <MDBNavItem>
              <Link to="/"><h5 className="font-weight-bold white-text">Hem</h5></Link>
            </MDBNavItem>
            <br />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Nav;
