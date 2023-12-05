import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './aplicarEmpleos.css';
import Empleos, { agregarPostulante } from '@/app/model/Empleos';
import { toast } from "react-toastify"


export function AplicarEmpleos(props: any) {
  const { empleo, cerrarModal } : {empleo:Empleos,cerrarModal:Function} = props;
  const [show, setShow] = useState(true);
  const [userInfo, setUserInfo] = useState({
    nombre: '',
    email: '',
    numeroContacto: '',
  });
  
  const mostrarAlerta = () => {
    toast.success("Su solicitud ha sido enviada, nos pondremos en contacto contigo. Muchas Gracias", {position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",});
  }

  const aplicarEmpleo = () => {
    agregarPostulante(userInfo);
    // Mostrar por consola los datos del usuario
    console.log('Datos del usuario:', userInfo);
    closeModal();
    mostrarAlerta();
  }

  //cerrar modal
  const closeModal = () => {
    setShow(false);
    cerrarModal(empleo.id);
  };

  return (
    <>
      <Modal className="modalEmpleos" show onHide={() => closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>¿Deseas aplicar a este empleo? {empleo.puesto} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <form className="formEmpleos">
                <label htmlFor="nombre">Nombre Completo:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={userInfo.nombre}
                  onChange={(e) => setUserInfo({ ...userInfo, nombre: e.target.value })}
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                />
                <label htmlFor="numeroContacto">Número de Contacto:</label>
                <input
                  type="text"
                  id="numeroContacto"
                  name="numeroContacto"
                  value={userInfo.numeroContacto}
                  onChange={(e) => setUserInfo({ ...userInfo, numeroContacto: e.target.value })}
                />
              </form>
        </Modal.Body>
        <Modal.Footer className="footerBotones">
          <Button className="botonCancelar" variant="secondary" onClick={() => cerrarModal(empleo.id)}>
            Cancelar
          </Button>
          <Button className="botonAceptar" variant="primary" onClick={() => aplicarEmpleo()}>
            Aplicar a Empleo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
