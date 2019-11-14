import React from 'react';
import Nav from '../components/Nav'

const DefaultLayout = (props) => {

  return (
    <div className="App">
      <Nav />
      {props.children}
    </div>
  )

}

export default DefaultLayout;
