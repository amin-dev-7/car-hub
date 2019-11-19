import React from 'react';
import { MDBBtn} from 'mdbreact';

const ContactButton = (props) => {
  return (
    <div>
      <MDBBtn className="font-weight-bold button-color"
      href={"mailto:" + props.email}>kontakta säljaren</MDBBtn>
    </div>
  )
}

export default ContactButton;

