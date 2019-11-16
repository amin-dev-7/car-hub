import React from 'react';
import DefaultLayout from '../../layouts/index';
import UpdateCar from '../../components/Car/CarCard/UpdateCar';

const UpdateCarPage = ({match}) => {

  return(
  <DefaultLayout>

    <UpdateCar carId={match.params.carId}/>
  </DefaultLayout >
  );
}

export default UpdateCarPage;
