'use client'
import './eventosTurismo.css'
import Eventos from '@/app/model/EventosTurismo';

export const EventosTurismo = (props: any) => {
    const { datos }: { datos: Eventos[] } = props;

    return (
        <>
            <div className='body-event'>
                <div className='body-titulo-eventos'>
                    <p className='titulo-eventos'>Proximos eventos</p>
                </div>

                {datos.map((item: Eventos) => (

                    <div className='card-body-event'>

                        <img src={`imagenes/imagenesTurismo/${item.titulo}.jpg`} className="img-eventos" alt={item.titulo} />
                        <div className='descripcion-img'>
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
