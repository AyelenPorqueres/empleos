/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
'use client'
import './eventosTurismo.css'
import Eventos from '@/app/model/EventosTurismo';

export const EventosTurismo = (props: any) => {
    const { datos }: { datos: Eventos[] } = props;

    return (
        <>
            <div className='body-event'>
                <div className='divTituloEventos'>
                    <p className='tituloEventos'>Proximos eventos</p>
                </div>

                {datos.map((item: Eventos) => (

                    <div className='cardBodyEvent'>
                        <img src={`imagenes/imagenesTurismo/${item.titulo}.jpg`} className="imgEventos" alt={item.titulo} />
                        <div className='descripcionImg'>
                            <p className="card-text-title-event">{item.titulo}</p>
                            <p className='card-text-description-event'>{item.descripcion}</p>
                        </div>
                    </div>
                
            )
            )}
            </div>
        </>
    )
};
