import React from 'react';

const DefaultLayout = (props) => {

  return (
    <div className="App">
      {props.children}
    </div>
  )
}

export default DefaultLayout;
