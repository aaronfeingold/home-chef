import React from 'react';
import Carousel from './Carousel'
import Welcome from './Welcome';

const Home = (props) => {
  return (
    <div className="container">
      <Welcome />
      <Carousel />

    </div>
  );
};
export default Home;