/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import './cardEmpleos.css';
import Empleos from '@/app/model/Empleos';
import Accordion from 'react-bootstrap/Accordion';
import { AplicarEmpleos } from '../aplicarEmpleos/aplicarEmpleos';

export const CardEmpleos = (props: any) => {
  const { datos }: { datos: Empleos[] } = props;
  const [misDatos, setMisDatos] = useState<Empleos[]>(datos);

  useEffect(() => {
    setMisDatos(datos)
  }, [datos]);

  const mostrarModal = (id: number) => {
    const newDatos: Empleos[] = misDatos.map((item) => ({
        ...item,
        mostrarModal: item.id == id,
    }))
    setMisDatos(newDatos);
}

 const cerrarModal = (id: number) => {
    const newDatos: Empleos[] = misDatos.map((item) => ({
        ...item,
        mostrarModal: item.id == id && false,
    }))
    setMisDatos(newDatos);
}

  return (
    <>
      {misDatos.map((item: Empleos) => (
        <div className="card d-flex flex-column align-items-center" key={item.id}>
          <img src={`imagenes/imagenesEmpleos/${item.puesto}.jpg`} className="card-img-top" alt={item.puesto} />
          <div className="card-body">
            <p className="card-text-title">{item.puesto}</p>
            <p className="card-text-description">{item.descripcion}</p>
          </div>

          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="button-vermas">VER MÁS</Accordion.Header>
              <Accordion.Body className="accordion-body">
                <p className="card-text-description"> RUBRO: {item.rubro}</p>
                <p className="card-text-description"> REQUISITOS: {item.requisitos}</p>
                <p className="card-text-description"> CARGA HORARIA: {item.cargaHoraria}hs</p>
                <button className="button-trabajo" onClick={() => mostrarModal(item.id)}>
                  APLICAR AL EMPLEO
                </button>
                { item.mostrarModal && < AplicarEmpleos empleo={item} cerrarModal={() => cerrarModal(item.id)} />}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </>
  );
};
