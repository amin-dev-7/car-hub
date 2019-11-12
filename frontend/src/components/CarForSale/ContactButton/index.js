import React from 'react';
import { MDBBtn} from 'mdbreact';

const ContactButton = (props) => {
  return (
    <div>
      <MDBBtn color="btn btn-success" className="font-weight-bold"
      href={"mailto:" + props.ContactButton.email}>kontakta säljaren</MDBBtn>
    </div>
  )
}

export default ContactButton;

