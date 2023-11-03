import React from "react";

export function Carrousel() {
  return (
    <div>
      <div id="carouselImagenes" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselImagenes" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Img 1"></button>
          <button type="button" data-bs-target="#carouselImagenes" data-bs-slide-to="1" aria-label="Img 2"></button>
          <button type="button" data-bs-target="#carouselImagenes" data-bs-slide-to="2" aria-label="Img 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src= "/empleos/public/imagenes/ImagenInicio1.jpeg" className="d-block w-100" alt="Img 1" />
          </div>
          <div className="carousel-item">
            <img src="/empleos/public/imagenes/ImagenInicio2.jpeg" className="d-block w-100" alt="Img 2" />
          </div>
          <div className="carousel-item">
            <img src="/empleos/public/imagenes/ImagenInicio3.jpeg" className="d-block w-100" alt="Img 3" />
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

