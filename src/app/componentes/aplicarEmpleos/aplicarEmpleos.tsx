import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './aplicarEmpleos.css';
import Empleos, { agregarPostulante } from '@/app/model/Empleos';

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
  const [userInfo, setUserInfo] = useState({
    nombre: '',
    email: '',
    numeroContacto: '',
  });
  const [isFormularioValido, setIsFormularioValido] = useState(false);

  const cerrarModal = (id: number) => {
    const newDatos: Empleo[] = misDatos.map((item) => ({
      ...item,
      mostrarInfo: item.id === id && false,
    }));
    setMisDatos(newDatos);

    // Agregar el usuario a la lista de postulantes
    agregarPostulante(userInfo);

    // Mostrar por consola los datos del usuario
    console.log('Datos del usuario:', userInfo);

    // Marcar el formulario como válido
    setIsFormularioValido(true);

    // Cierra el modal
    handleClose();
  };

  return (
    <>
      <Modal className="modalEmpleos" show onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Deseas aplicar a este empleo?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {misDatos.map((item) =>
            item.mostrarInfo ? (
              <form className="formEmpleos" key={item.id}>
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
            ) : null
          )}
        </Modal.Body>
        <Modal.Footer className="footerBotones">
          <Button className="botonCancelar" variant="secondary" onClick={() => cerrarModal(empleo.id)}>
            Cancelar
          </Button>
          <Button className="botonAceptar" variant="primary" onClick={() => cerrarModal(empleo.id)}>
            Aplicar a Empleo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
