'use client'
import Figure from 'react-bootstrap/Figure';
import ImagenesTurismo from '@/app/model/ImagenesTurismo';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import './imagenesTurismo.css'

export const ImagenesTurismo = (props: any) => {
    const { datos }: { datos: ImagenesTurismo[] } = props;
    const estadosInicial = [];
    for (let index = 0; index < datos.length; index++) {
        estadosInicial.push(false);
        
    }
    const [modalShow, setModalShow] = useState <boolean[]>(estadosInicial);
   
     const mostrarModal=(id:number) =>{
        const newModalShow= modalShow;
        newModalShow.splice(id-1,1,true);
        setModalShow (newModalShow);
        console.log(id);
        console.log (newModalShow);
        
     }


    return (
        <>
            {datos.map((item: ImagenesTurismo) => (

                <Figure>
                    <Figure.Image width={250} height={250} src={`imagenes/imagenesTurismo/${item.titulo}.jpg`} alt={item.titulo}
                    />

                    <div className='text-img-turismo'>
                        <button className='text-img-h2' onClick={() => mostrarModal(item.id)}>{item.titulo}</button>

                        <Modal
                            {...props}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={modalShow[item.id -1]}
                            /*onHide={() => setModalShow(false)}*/
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                
                                <p>
                                    {item.descripcion}
                                </p>
                            </Modal.Body>
                          
                        </Modal>



                    </div>


                </Figure>





            )
            )}





        </>
    );
}
