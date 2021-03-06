import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {

  return(
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={window.location.origin + '/images/chicken_enchiladas.jpg'} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={window.location.origin + '/images/coq_au_vin.jpeg'} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={window.location.origin + '/images/red_beans_and_rice.jpg'} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carousel

