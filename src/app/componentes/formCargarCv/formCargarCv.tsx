'use client'
import React from 'react'
import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import './formCargarCv.css'
import Candidatos from '@/app/model/Candidatos';


export const FormCargarCv = () => {
    const [sonIguales, setSonIguales] = useState(true);
    const { register, handleSubmit, reset, getValues } = useForm<Candidatos>();
    const onSubmit: SubmitHandler<Candidatos> = (client) => {
      console.log(
      );
      reset();
    };
  
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nombre y Apellido</label>
          <input {...register("nombreCompleto", { required: true, minLength: 6 })} />
          <label>Profesión</label>
          <input {...register("especializacionLaboral")} />
          <label>Edad</label>
          <input {...register("edad", { required: true, minLength: 6 })} />
          <label>Habilidades</label>
          <input {...register("habilidadUno", { required: true, minLength: 6 })} />
   
          <input type="submit" disabled = {sonIguales ? false : true}/>
        </form>
    </>
  )
}

