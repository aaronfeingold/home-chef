import React from 'react';

const Welcome = (props) => {

  

  return (
    <div className="container-fluid">
      <h3>Hello, {props.user}!</h3>
      <p>You successfully Have Signed in!</p>
      {/* will build button for signout */}
    </div>
  )
};
export default Welcome;