'use client'
import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { SubmitHandler, useForm } from "react-hook-form";
import Candidatos from '@/app/model/Candidatos';
import './cargarCv.css'

function CargarCv(props: any) {
  const { handleAltaCandidato }: { handleAltaCandidato: Function } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    reset();
  }

  const [file, setFile] = useState<any>();

  const handleShow = () => setShow(true);

  const cargarImagen = (e:any) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm<Candidatos>();
  const onSubmit: SubmitHandler<Candidatos> = (candidato) => {
    const newCandidato = 
    {...candidato,
      imagen: file,
    } 
    console.log(newCandidato)
    handleAltaCandidato(newCandidato);
    //validaciones
    setFile(undefined);
    handleClose();
  };

  return (
    <>
      <div className='containerCv'>
        <button type='button' className='btnCv' onClick={handleShow}>CARGA TU CURRICULUM VITAE</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='titulo-modal-cv'>Carga de curriculum</Modal.Title>
        </Modal.Header>
        <Modal.Body className='cuerpo-modal'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className='form-label label-cv'>Nombre y Apellido</label>
              <input className='form-control input-cv' {...register("nombreCompleto",{ required: true })} />
                {errors.nombreCompleto && <small className='texto-validaciones'>Por favor ingrese su nombre</small>}
            </div>
            <div>
              <label className='form-label label-cv'>Profesión</label>
              <input className='form-control input-cv' {...register("especializacionLaboral", {required: "Por favor ingrese su profesión",})} />
              {errors.especializacionLaboral && <small className='texto-validaciones'>{errors.especializacionLaboral.message}</small>}
            </div>
            <div>
              <label className='form-label label-cv'>Edad</label>
              <input className='form-control input-cv' {...register("edad",{required: "Por favor ingrese su edad",
                pattern: {value: /\d+/, message: "Este campo es númerico"}})} />
              {errors.edad && <small className='texto-validaciones'>{errors.edad.message}</small>}
            </div>
            <label className='form-label label-cv'>Foto de perfil</label>
            <input className='form-control input-cv' type="file"  accept='image/png,image/jpeg,image/jpg' name='files' 
            onChange={cargarImagen} />
            <div>
              <label className='form-label label-cv'>Habilidades</label>
              <div className='input-group'>
                <input className='form-control' {...register("habilidadUno",{required: "Por favor ingrese al menos una habilidad",
                  maxLength: {value: 30, message: "Este campo no puede exceder los 30 caracteres."}})} />
                <input className='form-control'{...register("habilidadDos")} />
                <input className='form-control'{...register("habilidadTres")} />
                <input className='form-control'{...register("habilidadCuatro")} />
              </div>
              {errors.habilidadUno && <small className='texto-validaciones'>{errors.habilidadUno.message}</small>}
            </div>
            <div className='d-flex flex-row justify-content-around align-items-center'>
              <label className='form-label label-cv'>Full Time</label>
              <select className="form-select select-cv" aria-label="Default select example" {...register("infoExtraUno")}>
                <option value="si">SI</option>
                <option value="no">NO</option>
              </select>
              <label className='form-label label-cv'>¿Tiene movilidad?</label>
              <select className="form-select select-cv" aria-label="Default select example" {...register("infoExtraDos")}>
                <option value="si">SI</option>
                <option value="no">NO</option>
              </select>
            </div>
            <label className='form-label label-cv'>Usuario Linkedin</label>
            <input className='form-control input-cv' {...register("linkedin")} />
            <input type="submit" className='btnCv' />
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CargarCv