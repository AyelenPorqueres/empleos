import './filtroCandidatos.css'
import { SubmitHandler, useForm } from "react-hook-form";


export const FiltroCandidatos = (props: any) => {
    interface FiltroCandidatos {
        option: string,
        value: string,

    }
    const { register, handleSubmit, reset } = useForm<FiltroCandidatos>();
    const { buscar }: { buscar: Function } = props;
    const onSubmit: SubmitHandler<FiltroCandidatos> = (datos) => {
        buscar(datos);
        reset();
    };

    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
            
                <form className="contenedor d-flex flex-row justify-content-center align-items-center" action="search" onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <select className="fondoBuscadores selector" {...register("option")}>
                            <option value="nombreApellido">Nombre/Apellido</option>
                            <option value="edad">Edad</option>
                            <option value="fullTime">Full-Time</option>
                            <option value="movilidad">Movilidad</option>
                        </select>
                    </label>

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


/*  

<div className="buscar">
                        <input id='letraBuscador' type="text" placeholder='buscar' {...register("value")} />

                        <div className='btn-Filtro'>
                            <i  className='fa fa-search' onClick={() => buscar()}></i>
                            <input type="submit" className='' />

                        </div>


                    </div>

*/