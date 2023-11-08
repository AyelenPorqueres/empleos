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
                    {/* <button className="btn button-vermas" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    VER MÁS
                </button> */}
                    <Accordion flush>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>VER MÁS</Accordion.Header>
                            <Accordion.Body>
                                <p className='card-text-description'> Rubro: {item.rubro}</p>
                                <p className='card-text-description'> Requisitos: {item.requisitos}</p>
                                <p className='card-text-description'> Carga horaria: {item.cargaHoraria}hs</p>
                                <button>APLICAR AL TRABAJO</button>

                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                </div>
            )
            )}
        </>
    );
}