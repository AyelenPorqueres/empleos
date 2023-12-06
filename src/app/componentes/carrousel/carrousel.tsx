/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import "./carrousel.css"
import Carousel from 'react-bootstrap/Carousel';

///Imagenes/ImagenInicio1.jpeg

export function Carrousel() {
  return (
    <Carousel className="containerImagenes container-fluid">
      <Carousel.Item>
        <img className="img-carrousel" src="Imagenes/imagenesCarrusel/Imagen1.png" alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carrousel" src="Imagenes/imagenesCarrusel/Imagen2.png" alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="img-carrousel" src="Imagenes/imagenesCarrusel/Imagen3.png" alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

