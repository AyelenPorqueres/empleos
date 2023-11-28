import React from 'react'
import './numerosEmergencia.css'

function NumerosDeEmergencia() {
    return (
        <>
            <div className='container-titulo-emergencia d-flex flex-row' >
                <p className='titulo-emergencia'>NÚMEROS DE EMERGENCIA</p>
            </div>
            <div className='emergenciaContainer d-flex flex-row'>


                <div className='container-img-p'>
                    <p className='p-hospital'>HOSPITAL</p>
                    <img src="imagenes/imagenesInicio/hospital.png" className='img-emergencia' alt="" />
                    <p className='numero-hospital'>492105</p>


                </div>
                <div className='container-img-p' >
                    <p className='p-policia'>POLICIA</p>
                    <img src="imagenes/imagenesInicio/policia.png" className='img-emergencia ' alt="" />
                    <p className='numero-policia'>492120</p>

                </div>
                <div className='container-img-p'>
                    <p className='p-bomberos'>BOMBEROS</p>
                    <img src="imagenes/imagenesInicio/bomberos.png" className='img-emergencia img-bomberos' alt="" />
                    <p className='numero-bomberos'>100</p>
                </div>
            </div>
        </>
    )
}

export default NumerosDeEmergencia;