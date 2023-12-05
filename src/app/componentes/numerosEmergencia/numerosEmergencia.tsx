/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './numerosEmergencia.css'

function NumerosDeEmergencia() {
    return (
        <>
            <div className='divTitulo d-flex flex-row' >
                <p className='tituloEmergencia'>NÚMEROS DE EMERGENCIA</p>
            </div>
            <div className='emergenciaContainer d-flex flex-row'>

                <div className='containerImgP'>
                    <p className='pImg'>HOSPITAL</p>
                    <img src="imagenes/imagenesInicio/hospital.png" className='imgEmergencia' alt="" />
                    <p className='numero'>492105</p>
                </div>

                <div className='containerImgP' >
                    <p className='pImg'>POLICIA</p>
                    <img src="imagenes/imagenesInicio/policia.png" className='imgEmergencia ' alt="" />
                    <p className='numero'>492120</p>
                </div>

                <div className='containerImgP'>
                    <p className='pImg'>BOMBEROS</p>
                    <img src="imagenes/imagenesInicio/bomberos.png" className='imgEmergencia imgBomberos' alt="" />
                    <p className='numeroBomberos'>100</p>
                </div>
            </div>
        </>
    )
}

export default NumerosDeEmergencia;