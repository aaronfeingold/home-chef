import React from 'react';

const Welcome = (props) => {
  let message

  if (props.isLoggedIn === true){
    message = "User is logged in"
  } else {
    message = "No User Logged In. Please try again"
  }

  return (
    <div className="container-fluid">
      <h3>Hello!</h3>
      <p>Message:</p>
      <p>{message}</p>
      
    </div>
  )
};
export default Welcome;