import React from 'react'
import carOptions from '../../../assets/data/car-options';
import carModelYears from '../../../assets/data/car-model-year.json';
import fuelOptions from '../../../assets/data/fuel-options.json';
import carList from '../../../assets/data/car-list.json';
import cities from '../../../assets/data/cities.json';
import gearboxOptions from '../../../assets/data/gearbox-options.json';
import {Form} from 'react-bootstrap';

let carOptionList = carOptions.map((option) =>
<option key={option.name}>{option.name}</option>
);

const Filter = () => {
  return (
    <div>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <p className="text-left">Typ av bil</p>
        <Form.Control as="select" placeholder="Välj bilmärke"
          // onChange=""
          // value=""
          name="carCategory">
          <option value="" disabled>Välj ett alternativ...</option>
          {carOptionList}
        </Form.Control>
      </Form.Group>
    </div>
  )
}

export default Filter;

