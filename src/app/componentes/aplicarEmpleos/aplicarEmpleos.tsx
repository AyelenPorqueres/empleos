import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './aplicarEmpleos.css';
import Empleos from '@/app/model/Empleos';

interface Empleo {
  id: number;
  mostrarInfo: boolean;
}

interface AplicarEmpleosProps {
  handleClose: () => void;
}

export function AplicarEmpleos(props: any) {
  const { empleo, handleClose } = props;
  const [misDatos, setMisDatos] = useState<Empleo[]>([{ id: empleo.id, mostrarInfo: true }]);

  const mostrarModal = (id: number) => {
    const newDatos: Empleo[] = misDatos.map((item) => ({
      ...item,
      mostrarInfo: item.id === id,
    }));
    setMisDatos(newDatos);
  };

  const cerrarModal = (id: number) => {
    const newDatos: Empleo[] = misDatos.map((item) => ({
      ...item,
      mostrarInfo: item.id === id && false,
    }));
    setMisDatos(newDatos);
  };

  return (
    <>
      <Modal className= 'modalEmpleos' show onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Deseas aplicar a este empleo?</Modal.Title>
        </Modal.Header>
        <Modal.Body> Empleo : {empleo} </Modal.Body>
        <Modal.Footer className="footerBotones">
          <Button className= 'botonCancelar' variant="secondary" onClick={() => cerrarModal(empleo.id)}>
            Cancelar
          </Button>
          <Button className= 'botonAceptar' variant="primary" onClick={() => cerrarModal(empleo.id)}>
            Aplicar a Empleo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

