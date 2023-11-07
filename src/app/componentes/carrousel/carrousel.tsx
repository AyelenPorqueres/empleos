import React from "react";
import "./carrousel.css"

export function Carrousel() {
  return (
    <div className="containerImagenes container-fluid">
      <div id="carouselImagenes" className="carousel slide" data-bs-ride="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Imagenes/ImagenInicio1.jpeg" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="/imagenes/ImagenInicio2.jpeg" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="/Imagenes/ImagenInicio3.jpeg" className="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="carouselImagenes" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="carouselImagenes" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

