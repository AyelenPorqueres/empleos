'use client'
import Figure from 'react-bootstrap/Figure';
import ImagenesTurismo from '@/app/model/ImagenesTurismo';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import './imagenesTurismo.css'

export const ImagenesTurismo = (props: any) => {
    const { datos }: { datos: ImagenesTurismo[] } = props;
    const [misDatos, setMisDatos] = useState<ImagenesTurismo[]>(datos);

    const mostrarModal = (id: number) => {
        const newDatos: ImagenesTurismo[] = misDatos.map((item) => ({
            ...item,
            mostrarInfo: item.id == id,
        }))
        setMisDatos(newDatos);
    }

    const cerrarModal = (id: number) => {
        const newDatos: ImagenesTurismo[] = misDatos.map((item) => ({
            ...item,
            mostrarInfo: item.id == id && false,
        }))
        setMisDatos(newDatos);
    }

    return (
        <>
            {misDatos.map((item: ImagenesTurismo) => (
                <Figure className='figure-turismo'>
                    <Figure.Image className='figure-img-turismo' width={250} height={250} src={`imagenes/imagenesTurismo/${item.titulo}.jpg`} alt={item.titulo}
                    />

                    <div className='text-img-turismo'>
                        <button className='text-img-h2' onClick={() => mostrarModal(item.id)}>{item.titulo}</button>

                        <Modal
                            {...props}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={item.mostrarInfo}
                            onHide={() => cerrarModal(item.id)}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                <p>
                                    {item.subtitulo}
                                </p>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    {item.descripcion}
                                </p>
                                <div>
                                   
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Figure>
            )
            )}
        </>
    );
}
