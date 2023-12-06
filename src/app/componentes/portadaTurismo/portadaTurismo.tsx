/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import './portadaTurismo.css'

export function PortadaTurismo() {
  return (
    <>
      <div className="containerPortada">
        <img src="imagenes/imagenesTurismo/portadaTurismo.jpg" className="img-fluid imgPortada" alt="Imagen de la ciudad de Sierras Bayas."></img>
      </div>
      <div>
        <p className="tituloPortada">Conoce Sierras Bayas</p>
      </div>
    </>

  )
}

