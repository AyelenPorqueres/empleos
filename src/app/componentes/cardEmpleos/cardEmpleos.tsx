'use client'
import React, { useState } from 'react';
import './cardEmpleos.css';
import Empleos from '@/app/model/Empleos';
import Accordion from 'react-bootstrap/Accordion';
import { AplicarEmpleos } from '../aplicarEmpleos/aplicarEmpleos'

export const CardEmpleos = (props: any) => {
    const { datos }: { datos: Empleos[] } = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {datos.map((item: Empleos) => (
                <div className="card d-flex flex-column align-items-center" key={item.id}>
                    <img src={`imagenes/imagenesEmpleos/${item.puesto}.jpg`} className="card-img-top" alt={item.puesto} />
                    <div className="card-body">
                        <p className="card-text-title">{item.puesto}</p>
                        <p className='card-text-description'>{item.descripcion}</p>
                    </div>
                    
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='button-vermas'>VER MÁS</Accordion.Header>
                            <Accordion.Body className='accordion-body'>
                                <p className='card-text-description'> RUBRO: {item.rubro}</p>
                                <p className='card-text-description'> REQUISITOS: {item.requisitos}</p>
                                <p className='card-text-description'> CARGA HORARIA: {item.cargaHoraria}hs</p>
                                <button className='button-trabajo' onClick={handleShow}>
                                    APLICAR AL TRABAJO
                                </button>
                                {show && <AplicarEmpleos empleo={item.rubro} handleClose={handleClose} />} 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </>
    );
};
