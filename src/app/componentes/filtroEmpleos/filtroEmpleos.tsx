"use client"
import './filtroEmpleos.css'
import { SubmitHandler, useForm } from "react-hook-form";
export const FiltroEmpleos = (props: any) => {
    interface FiltroEmpleos {
        option: string,
        value: string,

    }

    const { register, handleSubmit, reset } = useForm<FiltroEmpleos>();
    const { buscar }: { buscar: Function } = props;
    const onSubmit: SubmitHandler<FiltroEmpleos> = (datos) => {
        buscar(datos);
        reset();
    };

    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
            
            
            
                <form className='contenedor d-flex flex-row justify-content-center align-items-center' action="search" onSubmit={handleSubmit(onSubmit)}>
                        <select className="fondoBuscadores selector" {...register("option")}>
                            <option value="cargaHoraria">Carga Horaria</option>
                            <option value="rubro">Rubro</option>
                            <option value="puesto">Puesto</option>
                        </select>


                
                    <div className="buscar">    
                            <input  id='letraBuscador' className='aver'  type="text" placeholder='buscar' {...register("value")} />
                            <button id='submitNo' className='botonEnviarSubmit' type="submit" >
                                <i className='fa fa-search' ></i>
                            </button> 
                    </div>
                </form>


            
        </>
    )
}