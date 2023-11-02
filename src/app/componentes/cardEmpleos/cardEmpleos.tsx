import './cardEmpleos.css'

export const CardEmpleos = () => {

    return (

        <div className="card d-flex flex-column align-items-center col">
            <img src="imagenes/training.jpg" className="card-img-top" alt="personal training" />
            <div className="card-body">
                <p className="card-text-title">PERSONAL TRAINING</p>
                <p className='card-text-description'>El club San Martin se encuentra en la busqueda de profesor para entrenamiento grupal de mañana y de tarde.</p>
            </div>


            <button className="btn button-vermas" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                VER MÁS
            </button>



        </div>



    );




}