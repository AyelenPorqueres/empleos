'use client'
import React from "react";
import "./carrousel.css"
import Carousel from 'react-bootstrap/Carousel';

///Imagenes/ImagenInicio1.jpeg

export function Carrousel() {
  return (
    <Carousel className="containerImagenes container-fluid">
      <Carousel.Item>
        <img className="img-carrousel" src="Imagenes/ImagenInicio1.jpeg" alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carrousel" src="Imagenes/ImagenInicio2.jpeg" alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="img-carrousel" src="Imagenes/ImagenInicio3.jpeg" alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

