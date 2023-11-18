'use client'
import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './cargarCv.css'
import { FormCargarCv } from '../formCargarCv/formCargarCv';

function CargarCv() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='containerCv'>
        <button type='button' className='btnCv'onClick={handleShow}>CARGA TU CURRICULUM VITAE</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carga de curriculum</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCargarCv/>
        </Modal.Body>
        <Modal.Footer>
        <button type='button' className='btnCv' onClick={handleClose}>
            Cerrar
          </button>
          <button type='button' className='btnCv' onClick={handleClose}>
            Cargar CV
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CargarCv