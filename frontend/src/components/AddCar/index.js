import React from "react";
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';
import { Link, Redirect } from "react-router-dom";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './AddCar.css'
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
    const options = [
      'one', 'two', 'three'
    ]
    const defaultOption = options[0];
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <div className="sign-in">
                <h3 className="my-3">
                  <strong className="font-weight-bold"> Lägg in din bil annons</strong>
                </h3>
              <br />
            </div>
            <form onSubmit={this.onSubmit}>
              <p className="text-left">Bilder </p>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">Ladda upp </span>
                </div>
                <div className="custom-file">
                  <input type="file" id="inputGroupFile01" ria-describedby="inputGroupFileAddon01"/>
                  <label className="custom-file-label" htmlFor="inputGroupFile01">
                    Välj bild
                  </label>
                </div>
              </div>
              <br />
              <br />
              <p className="text-left">Typ av bil </p>
              <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                placeholder="Select an option"
              />
              <br />
              <p className="text-left">Märke </p>
              <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                placeholder="Select an option"
              />
              <br />
              <p className="text-left">Modell </p>
              <Dropdown options={options} onChange={this._onSelect}
                value={defaultOption}
                placeholder="Select an option"
              />
              <br />
              <p className="text-left">Modellår </p>
              <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                placeholder="Select an option"
              />
              <br />
              <p className="text-left">Bränsle </p>
              <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                placeholder="Select an option"
              />
              <br />
              <p className="text-left">Växellåda </p>
              <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                placeholder="Select an option"
              />
              <br />
              <p className="text-left"> Anonns titel </p>
              <input type="text" id="titel" className="form-control" name="titel" value={this.state.titel}
                onChange={this.handleChange} />
              <br />
              <p className="text-left">Pris </p>
              <input type="text" id="adDescription" className="form-control" name="adDescription"
                value={this.state.lastName}
                onChange={this.handleChange} />
              <br />
              <MDBInput type="textarea" label="Beskrivning" rows="5" />
              <br />
              <div className="text-center mt-4">
                <MDBBtn color="btn btn-success" type="submit" className="font-weight-bold">
                  Lägg in annons
                </MDBBtn>
              </div>
            </form>
            <br />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default AddCar;
