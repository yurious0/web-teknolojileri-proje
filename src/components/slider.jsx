import { useEffect } from 'react';
import * as bootstrap from 'bootstrap';
import cumalikizik from '../assets/cumalikizik.jpg';
import ulucami from '../assets/ulucami.webp';
import uludag from '../assets/uludag.jpg';
import yesilturbe from '../assets/yesilturbe.jpg';
import '../css/style.css';

function Slider() {
  useEffect(() => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
      new bootstrap.Carousel(carousel, {
        interval: 3000,
        wrap: true
      });
    });
  }, []);

  return (
    <div className="slider-container">
      <div id="carouselExampleIndicators" className="carousel slide carousel-container" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="#cumalikizik">
              <img 
                src={cumalikizik} 
                className="d-block w-100 carousel-image" 
                alt="Cumalıkızık"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#ulucami">
              <img 
                src={ulucami} 
                className="d-block w-100 carousel-image" 
                alt="Ulu Cami"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#uludag">
              <img 
                src={uludag} 
                className="d-block w-100 carousel-image" 
                alt="Uludağ"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#yesilturbe">
              <img 
                src={yesilturbe} 
                className="d-block w-100 carousel-image" 
                alt="Yeşil Türbe"
              />
            </a>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;

