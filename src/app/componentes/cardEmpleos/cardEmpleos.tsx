import './cardEmpleos.css'
import Empleos from '@/app/model/Empleos';

export const CardEmpleos = (props:any) => {

    const { datos } : {datos:Empleos[]}= props;


    return (
        <>
        {datos.map((item:Empleos) => (
            <div className="card d-flex flex-column align-items-center">
                <img src={`imagenes/${item.puesto}.jpg`} className="card-img-top" alt={item.puesto} />
                <div className="card-body">
                    <p className="card-text-title">{item.puesto}</p>
                    <p className='card-text-description'>{item.descripcion}</p>
                </div>
                <button className="btn button-vermas" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    VER MÁS
                </button>
            </div>
            )
        )}
        </>
    );
}