import './filtroCandidatos.css'
import { SubmitHandler, useForm } from "react-hook-form";
 

export const FiltroCandidatos = (props: any) => {
    interface FiltroCandidatos {
        option: string,
        value: string,
        edad: number,
    }
    const { register, handleSubmit, reset } = useForm<FiltroCandidatos>();
    const { buscar }: { buscar: Function } = props;


    const onChange: SubmitHandler<FiltroCandidatos> = (datos) => {
        buscar({ option: 'edad', value: datos.value });
        
    //buscar(datos);
    };

    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

            <form className="contenedor d-flex flex-row justify-content-center align-items-center" action="search" onChange={handleSubmit(onChange)}>
                <label>
                    <select className="fondoBuscadores selector" {...register("option")}>
                        <option value="nombreApellido">Nombre/Apellido</option>
                    </select>
                </label>

                <label>
                    <select className="fondoBuscadores selector" {...register("value")}>
                        <option value="">Edad...</option>
                        <option value="18-25">18-25</option>
                        <option value="26-33">26-33</option>
                        <option value="34-41">34-41</option>
                        <option value="42-49">42-49</option>
                        <option value="50-57">50-57</option>
                        <option value="58-65">58-65</option>
                    </select>
                </label>

                <label>
                    <select className="fondoBuscadores selector" {...register("option")}>
                        <option value="">Carga Horaria...</option>
                        <option value="fullTime">Full-Time</option>
                        <option value="">Part-Time</option>
                    </select>

                </label>

                <label>
                    <select className="fondoBuscadores selector" {...register("option")}>
                        <option value="">Movilidad...</option>
                        <option value="">Si</option>
                        <option value="">No</option>
                    </select>

                </label>



                <div className="buscar">

                    <input id='letraBuscador' className='aver' type="text" placeholder='buscar' {...register("value")} />
                    <button id='submitNo' className='botonEnviarSubmit' type="submit" >
                        <i className='fa fa-search' ></i>
                    </button>

                </div>

            </form>


        </>
    )
}
