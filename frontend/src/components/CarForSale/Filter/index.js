// import React from 'react'
// import carOptions from '../../../assets/data/car-options';
// import carModelYears from '../../../assets/data/car-model-year.json';
// import fuelOptions from '../../../assets/data/fuel-options.json';
// import carList from '../../../assets/data/car-list.json';
// import cities from '../../../assets/data/cities.json';
// import gearboxOptions from '../../../assets/data/gearbox-options.json';
// import {Form} from 'react-bootstrap';
// import {MDBContainer} from 'mdbreact';

// class Filter extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       carCategory: '',
//      };
//     this.handleChange = this.handleChange.bind(this)
//   }

//   componentDidMount = () =>{

//   }

//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//       });
//   };

//   render() {
//     let carOptionList = carOptions.map((option) =>
//     <option key={option.name}>{option.name}</option>
//     );
//     return (
//       <MDBContainer>
//       <Form.Group controlId="exampleForm.ControlSelect2">
//         <br />
//           <p className="text">Typ av bil</p>
//           <Form.Control as="select" placeholder="Välj bilmärke"
//             onChange={this.handleChange}
//             value={this.props.carCategory}
//             name="carCategory">
//             <option value="" disabled>Välj ett alternativ...</option>
//             {carOptionList}
//           </Form.Control>
//         </Form.Group>
//       </MDBContainer>
//     );
//   }
// }

// export default Filter;
