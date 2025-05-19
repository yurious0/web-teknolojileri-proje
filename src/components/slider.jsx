import { useEffect } from 'react';
import * as bootstrap from 'bootstrap';
import cumalikizik from '../assets/cumalikizik.jpg';
import ulucami from '../assets/ulucami.webp';
import uludag from '../assets/uludag.jpg';
import yesilturbe from '../assets/yesilturbe.jpg';

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
    <div className="d-flex justify-content-center">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '800px', width: '100%' }}>
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
                className="d-block w-100" 
                alt="Cumalıkızık" 
                style={{ objectFit: 'cover', height: '400px', cursor: 'pointer' }} 
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#ulucami">
              <img 
                src={ulucami} 
                className="d-block w-100" 
                alt="Ulu Cami" 
                style={{ objectFit: 'cover', height: '400px', cursor: 'pointer' }} 
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#uludag">
              <img 
                src={uludag} 
                className="d-block w-100" 
                alt="Uludağ" 
                style={{ objectFit: 'cover', height: '400px', cursor: 'pointer' }} 
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#yesilturbe">
              <img 
                src={yesilturbe} 
                className="d-block w-100" 
                alt="Yeşil Türbe" 
                style={{ objectFit: 'cover', height: '400px', cursor: 'pointer' }} 
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

