import React from 'react'
import './numerosEmergencia.css'

function NumerosDeEmergencia() {
    return (
        <>
            <div className='container-titulo-emergencia d-flex flex-column justify}-content-center align-items-center' >
                <p className='titulo-emergencia'>NÚMEROS DE EMERGENCIA</p>

                <div className=' emergenciaContainer d-flex flex-row justify-content-between'>


                    <div className='d-flex flex-column align-items-center '>
                        <p>HOSPITAL</p>
                        <img src="imagenes/imagenesInicio/hospital.png" className='img-emergencia' alt="" />
                        <p className='p-numero-emergencia'>492105</p>


                    </div>
                    <div className='d-flex flex-column align-items-center' >
                        <p>POLICIA</p>
                        <img src="imagenes/imagenesInicio/policia.png" className='img-emergencia ' alt="" />
                        <p className='p-numero-emergencia'>492120</p>

                    </div>
                    <div className='d-flex flex-column align-items-center '>
                        <p>BOMBEROS</p>
                        <img src="imagenes/imagenesInicio/bomberos.png" className='img-emergencia img-bomberos' alt="" />
                        <p className='p-numero-emergencia'>100</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NumerosDeEmergencia;