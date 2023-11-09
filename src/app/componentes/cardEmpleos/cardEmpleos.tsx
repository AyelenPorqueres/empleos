'use client'
import './cardEmpleos.css'
import Empleos from '@/app/model/Empleos';
import Accordion from 'react-bootstrap/Accordion';


export const CardEmpleos = (props: any) => {

    const { datos }: { datos: Empleos[] } = props;


    return (
        <>
            {datos.map((item: Empleos) => (
                <div className="card d-flex flex-column align-items-center">
                    <img src={`imagenes/${item.puesto}.jpg`} className="card-img-top" alt={item.puesto} />
                    <div className="card-body">
                        <p className="card-text-title">{item.puesto}</p>
                        <p className='card-text-description'>{item.descripcion}</p>
                    </div>
                    
                    <Accordion flush>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header className='button-vermas'>VER MÁS</Accordion.Header>
                            <Accordion.Body className='accordion-body'>
                                <p className='card-text-description'> RUBRO: {item.rubro}</p>
                                <p className='card-text-description'> REQUISITOS: {item.requisitos}</p>
                                <p className='card-text-description'> CARGA HORARIA: {item.cargaHoraria}hs</p>
                                <button className='button-trabajo'>APLICAR AL TRABAJO</button>

                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                </div>
            )
            )}
        </>
    );
}